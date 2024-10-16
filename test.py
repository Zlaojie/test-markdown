def greet(name):
    print(f"Hello, {name}!")

def calculate_sum(a, b):
    return a + b

def main():
    user_name = input("Please enter your name: ")
    greet(user_name)
    
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
    sum_result = calculate_sum(num1, num2)
    print(f"The sum of {num1} and {num2} is {sum_result}")

if __name__ == "__main__":
    main()
