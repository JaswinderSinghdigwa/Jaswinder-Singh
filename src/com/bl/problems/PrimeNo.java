package com.bl.problems;

import java.util.Scanner;

public class PrimeNo {
	public static void Prime(int n) {
		int i;
		for (i = 2; i < n ; i++)
		{
			if (n%i == 0) {
				break;
			}
		}
		if (n == i) {
			System.out.println("Its  Prime No" +i);
		}
		else {
			System.out.print("it is Not a Prime no" +i);
		}
		
	}
	public static void main(String[] args) {
		int i ;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the Number to check number or not");
		i = sc.nextInt();
		Prime(i);
		
	}
}
