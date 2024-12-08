import { useEffect, useState } from "react";
import { BlogService } from "../services/blogs";

const Blogs = () => {
    const { postBlog, getAllBlogs } = BlogService();

    const [blogData, setBlogData] = useState({
        metaTitle: "",
        metaDescription: "",
        ogTitle: "",
        ogDescription: "",
        ogImage: "",
        ogUrl: "",
        slug: "",
        featuredImage: null,
        featuredImageAltTxt: "",
        focusKeyword: "",
        tags: "",
        categories: "",
        Heading1: "",
        Heading2: "",
        Heading3: "",
        author: "",
    });

    const getInput = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            // Handle file input
            setBlogData({ ...blogData, [name]: files[0] });
        } else {
            setBlogData({ ...blogData, [name]: value });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Blog Data Submitted:", blogData);

        // Example to see the file in the console
        if (blogData.featuredImage) {
            console.log("Featured Image:", blogData.featuredImage.name);
        }


        const formData = new FormData();
        Object.keys(blogData).forEach((key) => {
            if (blogData[key]) {
                formData.append(key, blogData[key]);
            }
        });

        postBlog(formData).then((res) => {
            console.log(res, 'res');
        }).catch((res) => {
            console.log(res, 'err');
        }).finally(() => {
        })


    };
    const [allBlogs, setAllBlogs] = useState([])
    useEffect(() => {
        getAllBlogs().then((res) => {
            setAllBlogs(res.data)
            console.log(res.data, 'daaa')
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    console.log(allBlogs, 'blogg')

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            {/* Dynamically generating input fields */}
                            {Object.keys(blogData).map((key) => (
                                <div className="col-6" key={key}>
                                    <div className="form-floating mb-3">
                                        {key === "featuredImage" ? (
                                            // File input for featuredImage
                                            <input
                                                type="file"
                                                name={key}
                                                onChange={getInput}
                                                className="form-control"
                                                id={`floatingInput_${key}`}
                                            />
                                        ) : (
                                            // Text input for other fields
                                            <input
                                                type="text"
                                                name={key}
                                                value={key !== "featuredImage" ? blogData[key] : ""}
                                                onChange={getInput}
                                                className="form-control"
                                                id={`floatingInput_${key}`}
                                            />
                                        )}
                                        <label htmlFor={`floatingInput_${key}`}>
                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                        </label>
                                    </div>
                                </div>
                            ))}
                            <div className="col-6">
                                <button className="btn btn-primary float-end">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>



            <div className="table-responsive mt-5">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            {/* Generate table headers dynamically */}
                            {Object.keys(blogData).map((field) => (
                                <th scope="col" key={field}>
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {allBlogs.map((blog, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                {Object.keys(blogData).map((field) => (
                                    <td key={field}>
                                        {blog[field] ? blog[field].toString() : "N/A"}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Blogs;
