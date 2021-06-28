const express=require("express");

//database
const database=require("./database");


const booky=express();   //initialisation

/*
Route      /
Description      get all books 
Access           public
Parameters        None
Methods           Get
*/

//Building of API to get all books
booky.get("/",(req,res)=>{
    return res.json({books:database.books});

});

/*
Route            /is
Description      get Specific book
Access           public
Parameters        isbn
Methods           Get
*/


//to get specific books
booky.get("/is/:isbn",(req,res)=>{
    const getSpecificBook=database.books.filter((book)=>book.ISBN===req.params.isbn);

    if(getSpecificBook.length===0){
        return res.json({error:`No book found for the ISBN of ${req.params.isbn}`,});
    }
    return res.json({book:getSpecificBook});
});

/*
Route            /c
Description      get all books based on category
Access           public
Parameters        Catogory
Methods           Get
*/

booky.get("/c:category",(req,res)=>{
    const getSpecificBook=database.books.filter((book)=>book.category.includes(req.params.category));
      
    if(getSpecificBook.length===0){
        return res.json({error:`No book found for the catogory of ${req.params.isbn.category}`,});
    }
    return res.json({book:getSpecificBook});
});

/*
Route            /author
Description      get all author
Access           public
Parameters        NOne
Methods           Get
*/

booky.get("/author",(req,res)=>{
    return res.json({authors:database.author});
    
});

/*
Route            /author
Description      get all author based on books
Access           public
Parameters        isbn
Methods           Get
*/
booky.get("/author/book/:isbn",(req,res)=>{
    const getSpecificAuthor=database.author.filter((author)=>author.books.includes(req.params.isbn));
      
    if(getSpecificBook.length===0){
        return res.json({error:`No author found for the isbn of ${req.params.isbn.isbn}`,});
    }
    return res.json({author:getSpecificAuthor});
})

/*
Route            /author
Description      get all author based on books
Access           public
Parameters        isbn
Methods           Get
*/
booky.get("/publications",(req,res)=>{
    return res.json({publications:database.publication});
});


booky.listen(3000,()=> console.log("Hey server is running"))