const books=[{
    ISBN:"12345Book",
    title:"getting started with MERN",
    pubDate:"2020-07-07",
    language:"en",
    numPage:250,
    author:[1,2],
    publication:[1],
    category:["tech","programming","education","thrillers"],
}];

const author =[{
    id: 1,
    name:"pavan",
    books:["12345Book","123456secreat"],
    },
    {
        id: 2,
        name:"Elon Musk",
        books:["12345Book"],   
    }
];

const publication =[{
    id:1,
    name:"writex",
    books:["12345Book"],
}];

module.exports={books,author,publication};