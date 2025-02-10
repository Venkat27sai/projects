import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;
public class CeaserCipher
{      
        //Calling scanner to take the input
        static Scanner sc=new Scanner(System.in);
        //Buffer reader
        static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static void main(String[] args) throws IOException
     {
          //Taking inputs from the user like the string to encrypt and the key
          System.out.print("Enter any String: ");
          String str = br.readLine();
          System.out.print("\nEnter the Key: ");
          //The key is used to encrypt the text
          int key= sc.nextInt();
          //Calling the ecrypt function with the string and the key taken from the user
          String encrypted = encrypt(str, key);
          System.out.println("\nEncrypted String is: " +encrypted);
          System.out.println();
          //Calling the decrpyt function to decrpyt the encrypted text and printing them
          String decrypted = decrypt(encrypted, key);
          System.out.println("\nDecrypted String is:"+decrypted);
          System.out.println("\n");
          sc.close();
     }
            //A function to encrypt the text this function take two parameters
            public static String encrypt(String str, int key)
                {
                  //A string to store the encrypted text
                      String encrypted ="";
                      //A for loop to execute the main logic of the ceaser cipher encryption
                      //We iteratively parse the each character of the string
                      //As this is a substituion technique we use the formula C =  (p) = (p+k) mod 26 to substitute the letter
                          for(int i = 0; i < str.length(); i++)
                            {
                                 int c= str.charAt(i);
                                     if (Character.isUpperCase(c))
                                        {
                                          c = c + (key % 26);
                                        if (c > 'Z')
                                         c = c - 26;
                                        }
                                    else if (Character.isLowerCase(c))
                                        {
                                          c = c + (key % 26);
                                          if (c > 'z')
                                            c = c - 26;
                                        }
                            //Using increment we add the each encrypted letter to the string
                             encrypted += (char) c;
                            }
                        //We return the encrypted text
                        return encrypted;
                }
              //A function to perform decryption for the encrypted text
             public static String decrypt(String str, int key)
               {
                  //A stirng to store the decrypted text
                    String decrypted = "";
                    //It follows the same method as encrytion only difference is instead of C = E (p) = (p+k) mod 26 this formula
                  // We will use this formula P = D(C) = (C-k) mod 26 to decrypt the encrypted text
                       for(int i= 0; i < str.length(); i++)
                          {
                              int c = str.charAt(i);
                            if (Character.isUpperCase(c))
                              {
                                 c = c - (key % 26);
                                  if (c < 'A')
                                   c = c + 26;
                              }
                            else if (Character.isLowerCase(c))
                             {
                                c = c - (key % 26);
                                 if (c < 'a')
                                  c = c + 26;
                             }
                             //Using increment we add the each decrypted letter to the string
                                 decrypted += (char) c;
                          }
                    //We return the decrypted text
                     return decrypted;
                }
}


