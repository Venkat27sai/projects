
import java.util.*;
class XOREncryption 
{ 
	 
	static String encryptDecrypt(String inputString) 
	{ 
		
		char xorKey = 'P'; 
		String outputString = ""; 
		int len = inputString.length();  
		for (int i = 0; i < len; i++) 
		{ 
			outputString = outputString + 
			Character.toString((char) (inputString.charAt(i) ^ xorKey)); 
		} 

		System.out.println(outputString); 
		return outputString; 
	} 

	
	public static void main(String[] args) 
	{ 
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the string you want to encrypt:");
        String sampleString = sc.nextLine();
        System.out.println("Original String: " + sampleString);
        String encryptedString = encryptDecrypt(sampleString);
        System.out.println("Encrypted String: " + encryptedString);
        System.out.println("Decrypted String: " + encryptDecrypt(encryptedString));
		

	} 
} 




