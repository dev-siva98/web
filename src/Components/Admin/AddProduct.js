import React from 'react'

function AddProduct() {
    return (
        <div>
            <section>
                <div class="container mt-4">
                    <div class="class">
                        <div class="col-md-6">
                            <h2 class="text-center">Add Product</h2>
                            <form method="POST" id="add-product" action="/admin/add-product" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="pname">Product name<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="pname" name="pname" placeholder="Enter Product Name"/>
                                </div>
                                <div class="form-group">
                                    <label for="category">Category<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="category" name="category" placeholder="Enter Category"/>
                                </div>
                                <div class="form-group">
                                    <label for="desc">Description<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" name="description" id="description" placeholder="Description"/>
                                </div>
                                <div class="form-group">
                                    <label for="price">Price<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" name="price" id="price" placeholder="Price"/>
                                </div>
                                <div class="form-group">
                                    <label for="image">Image<span class="text-danger">*</span></label>
                                    <input type="file" class="form-control" name="image" id="image" placeholder="choose"/>
                                </div>
                                <div class="form-group mt-2">
                                    <input type="submit" value="Submit" class="btn btn-info btn-block"/>
                                </div>
                                <div class="form-group">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddProduct
