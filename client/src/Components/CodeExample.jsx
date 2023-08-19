import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeExample = () => {
  const cppCode = `#include <iostream>
using namespace std;

int main() {
  cout << "<Hello, World!>";
  return 0;
}`;

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="md:w-1/3 my-auto px-0 mx-auto">
        <h3 className="font-bold text-2xl">C++</h3>
        <p>
          A robust programming language renowned for its high performance and
          wide-ranging applications.
        </p>
      </div>
      <div className="md:w-1/2">
        <h3 className="font-bold hidden md:visible">C++ example</h3>
        <SyntaxHighlighter language="cpp" style={darcula}>
          {cppCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeExample;
