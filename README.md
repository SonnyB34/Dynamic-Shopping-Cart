# Dynamic Shopping Cart

A simple shopping cart app that lets users add and remove products and see the cart total update in real time.

## Reflections

1. The way i created and appended new elements in the DOM is by using document.createElement to create new elements and appending them to their parent element with document.appendChild.

2.The steps I took to ensure accurate updates to the total price, I made sure I converted the input to a number using parseFloat and used isNaN(price) to make sure every input was a number and also made sure price was never less than 0 so my total price was never a negative or wrong value.

3. The way I handled invalid inputs for product name or price was by setting my input fields to required as well as using a if statement to check if the product name was a name and if product price was a number and if not I made an alert message telling the user they must have a product name and price.

4. The challenge I faced implementing the remove functionality was making sure the right item was removed and the total stayed accurate after removing the item.

