package com.bl.problems;

import java.util.Scanner;

public class factorial {
	public static int factors(int n)
	{
		int i;
		for(i = n; i <= n; i--) {
			int t=1;
			i=i*n;
		}
		return i;
	}
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the Number for find Factorial:");	
		int b = sc.nextInt();
		int c = factors(b);
		System.out.print("factorial of number is" +c);
	}
}
