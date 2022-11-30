const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = mongoose.Schema({
    title: {type: String, required: true},
    author: String,
    price: {type: Number, required: true}
})
// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function() {
    const discountPrice = this.price * 0.5;
    console.log(
        `this is the discounted book price ${this.discountPrice}`
    );
};
// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);
// TODO: Create a new instance of the model
const discountedBook = new Book({
    title: 'Oh the Places You Will Go!',
    price: 100,
  });
// TODO: Call the custom instance method on the instance
discountedBook.getDiscount();
module.exports = Book;
