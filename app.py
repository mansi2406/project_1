# from flask import Flask, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route('/submit_booking', methods=['POST'])
# def submit_booking():
#     data = request.json
#     name = data.get('name')
#     email = data.get('email')
#     phone = data.get('phone')
#     checkin = data.get('checkin')
#     checkout = data.get('checkout')
#     room_type = data.get('roomType')
#     comments = data.get('comments', '')

#     if not all([name, email, phone, checkin, checkout, room_type]):
#         return jsonify({'success': False, 'message': 'All fields are required.'}), 400

#     # Save to database (simulate success response)
#     print(f"Booking received: {data}")
#     return jsonify({'success': True, 'message': 'Booking submitted successfully.'})

# if __name__ == '__main__':
#     app.run(debug=True)
# Item class to store the value, weight and value-to-weight ratio
class Item:
    def __init__(self, value, weight):
        self.value = value
        self.weight = weight
        self.ratio = value / weight  # value-to-weight ratio

# Function to calculate the maximum value for the fractional knapsack problem
def fractional_knapsack(capacity, values, weights):
    n = len(values)
    items = []

    # Create item objects with value, weight and ratio
    for i in range(n):
        items.append(Item(values[i], weights[i]))
    
    # Sort items by the value-to-weight ratio in descending order
    items.sort(key=lambda x: x.ratio, reverse=True)
    
    total_value = 0  # To store the total value of the knapsack
    remaining_capacity = capacity  # Remaining capacity of the knapsack
    
    for item in items:
        if remaining_capacity == 0:
            break  # No more capacity to fill
        
        if item.weight <= remaining_capacity:
            # Take the whole item
            total_value += item.value
            remaining_capacity -= item.weight
        else:
            # Take the fraction of the item that fits
            total_value += item.value * (remaining_capacity / item.weight)
            remaining_capacity = 0  # Knapsack is full
    
    return total_value

# Given values and weights
values = [20, 30, 40, 32, 55]
weights = [5, 8, 10, 12, 15]
capacity = 20  # Maximum knapsack capacity

# Calculate the maximum value for the given knapsack capacity
max_value = fractional_knapsack(capacity, values, weights)
print(f"Optimal value for the given knapsack capacity: {max_value}")
