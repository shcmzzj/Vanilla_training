// /**
//  * const、let当の変数宣言
//  */
// var var1 = "var変数";
// console.log(var1)

// // var変数は上書き可能
// var1 = "var変数を上書き";
// console.log(var1);


// // var変数は再宣言可能
// var var1 = "var変数を再宣言可能";
// console.log(var1);

// let var2 = "let変数";
// console.log(var2);

// //letは上書き可能
// var2 = "let変数を上書き";
// console.log(var2);

// //letは再宣言不可能
// let var2 = "let変数再宣言"

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数を上書き"

// //const変数は再宣言不可
// const val3 = "const変数は再宣言";

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "jack",
//   age: 28,
// };
// val4.name = "jak"
// val4.address = "Hokkaido"
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;

// //私の名前はじゃけぇです。年齢は28歳です。
// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10,20));

/**
 * 分割代入
 */