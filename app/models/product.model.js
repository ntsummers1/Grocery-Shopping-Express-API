module.exports = mongoose => {
    const Product = mongoose.model(
        "product",
        mongoose.Schema(
            {
                name: String,
                price: Number,
                category: [String],
                instock: Boolean,
                img: String,
            },
            { timestamps: false }
      )
    );
    return Product;
};