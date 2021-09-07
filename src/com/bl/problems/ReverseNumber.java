package com.bl.problems;

import java.util.Scanner;

public class ReverseNumber {
	public static void main(String[] args) {
		int n ,i,t=0,v;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the number");
		n = sc.nextInt();
		i=n;
		while (i != 0) {
			v=i%10;
			t = t*10+v;
			i=i/10;
		}
		System.out.print("Reverse Number of " + i + " is= " +t);
	}
}
