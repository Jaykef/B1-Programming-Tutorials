package com.example.javabasics;


import java.util.Scanner;

public class JavaBasics {
    public static void main(String[] args) {
        // println VS print
        System.out.println("Hello World"); // Prints "Hello World" with a new line
        System.out.print("Hello World"); // Prints "Hello World" without a new line

        // Data Types and Variables
        int number = -6;
        System.out.println(number);

        long longType = 1200;
        System.out.println(longType);

        double doubleType = 6.5;
        System.out.println(doubleType);

        float floatType = (float) 4.8;
        System.out.println(floatType);

        char charType = '\u00A9';
        System.out.println(charType);

        String stringType = "Jaykef";
        System.out.println(stringType);

        boolean booleanType = true;
        System.out.println(booleanType);


        // Arithmetic Operators
        int x = 3;
        int y = 6;
        int answer = x + y; // replace + with -, *, /, %
        System.out.println(answer);

        String firstName = "Jaward";
        String lastName = "Sesay";
        String fullName = firstName + lastName;
        System.out.println(fullName);

        boolean boolAnswer = x != y;
        System.out.println(boolAnswer);

        boolean orOperator = x==5 || y==6;
        System.out.println(orOperator);

        boolean andOperator = x==5 && y==6;
        System.out.println(andOperator);


        // Conditional Statements
        boolean answer1 = x > 4;

        // if
        if (answer1) {
            System.out.println("X is greater 3");
        } else {
            System.out.println("X is less than 3");
        }

        if (x > 0) {
            System.out.println("X is Positive");
        } else if (x < 0) {
            System.out.println("X is Negative");
        } else {
            System.out.println("X is Zero");
        }

        // Switch
        switch (x) {
            case 1:
                System.out.println("X is One");
                break;
            case 2:
                System.out.println("X is Two");
                break;
            case 3:
                System.out.println("X is Three");
                break;
            default:
                System.out.println("X is not One, Two or Three");
                break;
        }


        // Loops
        int a = 5;
        // For loop
        for (int i=0; i<a; i++) {
            System.out.println("Hello"); // prints hello five times
        }

        // While Loop
        while (a<10) {
            a++;
            if (a==8) {
                continue;
            }
            System.out.println("Hello");
        }

        // Do while loop
        do {
            System.out.println("Hello");
        } while (a<5);

        // Taking User Input in Java
        Scanner scanner = new Scanner(System.in);
        int integer = scanner.nextInt();
        System.out.println("Answer was: " + integer);

        System.out.println("Enter your name: ");
        String name = scanner.next();
        System.out.println("Hello " + name);

    }
}

