package com.bl.problems;

import java.awt.print.Printable;
import java.util.Scanner;

public class factors {
	
	public static void main(String[] args) {
		int n;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the Number");
		n = sc.nextInt();
		for(int i =2 ; i <= n; i++) {
			if ( n%i == 0) {
				System.out.println("Factor of n is =" +i);
			}
		}
	}
}
