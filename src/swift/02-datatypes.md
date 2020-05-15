---
title: Data Types
---

## What are data types?

If you have done any programming before you'll probably be familar with the idea of 'types' of data. As Swift is a statically typed language they play a bigger role than they do in a dynamically typed language like JS or Python. **A data type is basically the kind of value that a variable or constant stores.**  

The main *basic* types in Swift are:  

`String` (for text and characters)  
`Int` (for whole numbers)  
`Float` (for decimals numbers)  
`Double` (also for decimal numbers but with more digits after the decimal point (higher precision))    

There are more specific versions of the basic types, but you shouldn't worry too much about them when you're first getting started.  

For example there is a `Character` data type for storing single characters. There is also different variants of `Int`, such as `Int8`, `Int16` and `UInt`.  

The different variants of a data type are basically to do with **size** (and therefore the amount of space they take up in memory).  

In general (especially when you are just learning):
- if you're working with text use `String`
- if you're working with a whole number use `Int`
- if you're working with decimal numbers use `Float`.  

Once you become more familar with using data types and size becomes an important factor you can start being a bit pickier about which ones you use.  

------

## Examples of data types
 
**Strings** are wrapped in quotes " " so swift can recognise it as a String data type. 
```swift
"I am a string"
```

**Ints** are whole numbers: They can be positive, negative or zero.
```swift
23, 0, -5
```

**Floats** are decimal numbers (the technical name is "32 bit floating point number"), but they're suitable for most things (up to approximately 6 digits), if you need more precision though use a Double.  
```swift
0.122, 10.444, 100.2
```  

------

## Going further

These are the *basic* data types of Swift, but there are many more data types that aren't as basic, and we can essentially make our own when we make Structures and Classes. Also if you are working with iOS for example, you'll most likely be working with a lot of frameworks which have they're own types specified.



