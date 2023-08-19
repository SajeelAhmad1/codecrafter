import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CppAtGlance = () => {
  const code1 = `#include <iostream>
using namespace std;

int main() {
  //code goes here
  return 0;
}`;
  const code2 = `cout<<`;
  const code3 = `cin>>`;
  const code4 = `//this is a single lined comment.
/*this is a 
multi-lined comment*/`;
  const code5 = `int sum = 10;`;
  const code6 = `int sum = 10; //stores integer
float average = 90.33; //stores numbers with decimal
double percentage = 80.3452; //stores numbers with decimal but precision is double as compared to float
char letter = 'A'; //stores single character
bool isTrue = true; //stores true or false
string intro = "My name is Sajeel"; //stores sequence of characters
void myFunc();//it represent the absence of data type. Mostly used with functions and pointers`;
  const code7 = `//declaring string
string fname = "John";
string lname = "Doe";
//concatenating strings
//using "+"
const name = fname + lname;
//using append method
string name = fname.append(lname);
//finding length of string
//using .length() method
cout << myString.length();
//using .size() method
cout << myString.size();
//accessing characters of string
cout << myString[0]; //it will access the character at first index and so on
//Changing characters
mystring[0] = "A"; //change the first character to "A"
cout << myString[0];
//taking string input ignoring spaces
getline (cin, myString);`;
  const code8 = `Arithmetic Operators
+ //addition
- //subtraction
* //multiplication
/ //division
% //modulus
++ //increment
-- //decrement
Assignment Operators
= //assign value
+= //add and assign
-= //subtract and assign
/= //divide and assign
*= //multiply and assign
%= //taking modulus and assign
Comparison Operators
== //checks equality
!= //checks unequality
> //checks greater than
>= //checks greater than or equal to
< //check less than
<= //checks less than or equal to
Logical Operators
&& //returns true if all are expressions true
|| //returns true if only one expression is true
! //returns true if false and vice versa
Bitwise Operators
& //bitwise AND
| //bitwise OR
~ //bitwise NOT
>> //shift right 
<< //shift left
`;
  const code9 = `//if statement
if(condition){
    //code
}
//if-else statement
if(condition){
    //code
}
else{
    //code
}
//else-if statement
if(condition){
    //code
}
else if(condition){
    //code
}
else{
    //code
}

//goto statement
int main(){
  //code
  label:
  // code
  goto label;
  // code
}

//Ternary Operator
variable = condition ? ifTrue : ifFalse;
`;
  const code10 = `switch(expression){
    case const-exp:
        //code
        break;
    case const-exp:
        //code
        break;
    .
    .
    .
    default:
        //code
        break;
}`;

  const code11 = `//for Loop:
for( initialization ; condition ; change-variable-value ){
    //code
}

//while Loop:
initialize variable
while(condition){
    //code
    //change-variable-value
}

//do-while Loop:
initialize variable
do{
    //code
    //change-variable-value
}while(condition);`;

  const code12 = `//initializing arrays
int arrayName[size] = {data1, data2,.....}
//printing array
for(int i=0 ; i < ( sizeof(array)/ sizeof(int) ) ; i++){
    cout<<array[i];
}
//taking input in array
for(int i=0 ; i < ( sizeof(array)/ sizeof(int) ) ; i++){
    cin>>array[i];
}
//changing array elements at specified index
int myArray [3] = {1, 2, 3};
myArray[0] = 5; //now array has 5 at first index
`;
  const code13 = `//initializing struct
struct struct_name{
    //data members and member functions
};
int main(){
    //making instance of struct
    struct struct_name var_name;
    //accessing data members of struct  
    var_name.datamember;
    //accessing member functions of struct
    var_name.memberFunction();
}
//initializing union
union union_name{
    //data members 
};
int main(){
    //making instance of union
    union union_name var_name;
    //accessing data members of union  
    var_name.datamember;
}`;
  const code14 = `int var = 10;
//initialization of pointer
int *ptr = &var;
// &var is the reference to variable named var`;

  const code15 = `//declaring a function
returnType functionName(dataType parameters){
    //code
}
//calling a function
functionName(arguments);
//recursion
returnType functionName(dataType parameters){
    //code
    functionName(arguments);
    //code
}

//Function Overloading
int sum(int a, int b){
  return a+b;
}
float sum(float a, float b, int c){
  return a+b;
}
int main(){
  sum(5, 10);  
  sum(5.0, 10.0, 20);  
}`;
  const code16 = `//break statement
for( initialization ; condition ; change-variable-value ){
  if(condition){
    break;  //moves out of the loop when condition is true
  }
}

//continue statement
for( initialization ; condition ; change-variable-value ){
  if(condition){
    continue;  //skip the iteration when condition is true
  }
}`;
  const code17 = `//escape sequences
\\n //adds a new line
\\t //adds four spaces
\\b //backspace
\\a //beep sound
\\f //form feed
\\r //carriage return
\\\ //adds backslash
\\' //adds single quote
\\? //adds question mark
\\0 //null character`;

  const code18 = `// built-in functions in stdio.h
var = getchar();
int putchar(int c);
gets(var_name);
puts(var_name); 

//built-in functions in string.h
int strlen(string);
int strcmp(string1 , string2 );
int strncmp (string1, string2, n);
strcpy(string1, string2);
strncpy(string1, srting2, n);
strcat(string1,string2);
strncat(string1, string2, n);

//built-in functions in math.h
pow(x , y);
sqrt(x);
floor(x);
ceil(x);
fmod(x, y);
cos(x);
sin(x);
tan(x);
log(x);
log10(x);`;
  const code19 = `// Syntax for className
className class_name{
  //access modifier
  public / private / protected:
  // className members
};
int main(){
  //Syntax for creating object
  class_name obj_name;
}`;
  const code20 = `className A{
  public:
  //constructor
  A(){
    //code goes here
  }

  //destructor
  ~A(){
    //code goes here
  }
};`;
  const code21 = `className className{
  friend returnType funcName(dataType params...);
};
returnType funcName(dataType params...) {
  // Function definition with access to private and protected members of the className
}`;
  const code22 = `className MyClass
{
    friend className FriendClass;
};`;
  const code23 = `className class_name{
  private:
    //data members
  public:
    //member functions to access data members
};`;
  const code24 = `//Single Inheritance
className BaseClass {
  // Base className members
};
className DerivedClass : public BaseClass {
  // Derived className members
};


//Multiple Inheritance
className Shape { 
  protected:
    int length;
    int width;
  public:
    // Parametrized constructor
    Shape(int length, int width) {
      this->length = length;
      this->width = width;
    }
};
className Triangle : public Shape {
  public:
    // Parametrized constructor
    Triangle(int base, int height) : Shape(base, height) {
  }
};


//Multi-level Inheritance
className Shape { 
  protected:
    int length;
    int width;
  public:
    // Parametrized constructor
    Shape(int length, int width) {
      this->length = length;
      this->width = width;
    }
};
className Triangle : public Shape {
  public:
    // Parametrized constructor
    Triangle(int base, int height) : Shape(base, height) {
  }
};


//Hierarchical Inheritance
className Shape { 
  protected:
    int length;
    int width;
  public:
    // Parametrized constructor
    Shape(int length, int width) {
      this->length = length;
      this->width = width;
    }
};
className Triangle : public Shape {
  public:
    // Parametrized constructor
    Triangle(int base, int height) : Shape(base, height) {
  }
};


//Hybrid Inheritance
className Shape { 
  protected:
    int length;
    int width;
  public:
    // Parametrized constructor
    Shape(int length, int width) {
      this->length = length;
      this->width = width;
    }
};
className Triangle : public Shape {
  public:
    // Parametrized constructor
    Triangle(int base, int height) : Shape(base, height) {
  }
};`;
  const code25 = `// Compile time Polymorphism
className MathOperations {
  public:
      int add(int a, int b) {
          // code goes here
      }
      // Overloaded function
      int add(int a, int b, int c) {
          // code goes here
      }
};
Run time Polymorphism
className Animal {
  public:
    virtual void make_sound() {
      // code goes here
    }
};
  
className Dog : public Animal {
  public:
    // Overriding make_sound() function
    void make_sound() override {
      // redefining make_sound() function
    }
};
  
className Cat : public Animal {
  public:
    // Overriding make_sound() function
    void make_sound() override {
      // redefining make_sound() function
    }
};`;
  const code26 = `className Animals{
  public:
    // pure virtual function
    virtual void behavior() = 0;
};

className Lion : public Animals{
 public:
   void behavior(){
     // redefining behavior() function for Lion className
";
   }
};

className Donkey : public Animals{
 public:
   void behavior(){
    // redefining behavior() function for Donkey className
";
   }
};`;
  const code27 = `try {
  // here goes the code and if there is an error throw exception
  throw exception; 
}
catch () {
  // Block of code to handle errors
}`;
  const code28 = `//function templates
template <typename T>
T funcName(){
  //code
  return T;
}

//className templates
template <typename T>
className clasName{
  // className members with data type and return type "T"
};`;

  return (
    <div className="text-lg px-4 md:w-4/5 mx-auto pt-4">
      <h2 className="text-3xl font-bold mb-8 text-center">C++ at Glance</h2>
      <div>
        <h1>Basic Syntax</h1>
        <div>Basic syntax for a C++ code: </div>
        <div>
          <SyntaxHighlighter language="cpp">{code1}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>cout</h1>
        <div>
          cout along with insertion operator is used to print on console.{" "}
        </div>
        <div>
          <SyntaxHighlighter language="cpp">{code2}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>cin</h1>
        <div>
          cin along with extraction operator is used to take input from user.{" "}
        </div>
        <div>
          <SyntaxHighlighter language="cpp">{code3}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Comments</h1>
        <div>
          Comments are used to make your code more readable. Everything in
          comments are ignored by the compiler.
        </div>
        <div>
          <SyntaxHighlighter language="cpp">{code4}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Escape Sequences</h1>
        <div>
          <SyntaxHighlighter language="cpp">{code17}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Variables</h1>
        <div>Variables are used to store data of specified data type.</div>
        <div>
          <SyntaxHighlighter language="cpp">{code5}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Data Types</h1>
        <div>Data type specifies the type of data, stored in a variable.</div>
        <div>
          <SyntaxHighlighter language="cpp">{code6}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>String and its methods</h1>
        <div>Strings are sequence of characters.</div>
        <div>
          <SyntaxHighlighter language="cpp">{code7}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Operators</h1>
        <div>
          <SyntaxHighlighter language="cpp">{code8}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Conditional statements</h1>
        <div>
          <SyntaxHighlighter language="cpp">{code9}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Switch Statements</h1>
        <div>
          <SyntaxHighlighter language="cpp">{code10}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Loops</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code11}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Continue And Break Statements</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code16}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Arrays</h1>
        <div>
          <SyntaxHighlighter language="cpp">{code12}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Structures and Unions</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code13}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Pointers</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code14}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Functions</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code15}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Built-in Functions</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code18}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>
          Object Oriented Programming <br /> Classes and Objects
        </h1>

        <div>
          <SyntaxHighlighter language="cpp">{code19}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Constructors and destructors</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code20}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Friend Functions</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code21}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Friend Classes</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code22}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Encapsulation</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code23}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Inheritance</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code24}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Polymorphism</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code25}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Abstraction</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code26}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Exceptions</h1>

        <div>
          <SyntaxHighlighter language="cpp">{code27}</SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h1>Exception Templates</h1>
        <div>
          <SyntaxHighlighter language="cpp">{code27}</SyntaxHighlighter>
        </div>
      </div>
      <div>
        <h1>Function Templates</h1>
        <div>
          <SyntaxHighlighter language="cpp">{code28}</SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CppAtGlance;
