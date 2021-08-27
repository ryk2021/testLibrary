# testLibrary
testLibrary
*******************************************************
*************** Login Method : POST *******************
*******************************************************
  https://library2021-api.herokuapp.com/api/login
    Example>>>>>
    
        {
        "email":"Pruebas@gmail.com",
        "password":"12345"
        }
*******************************************************
*************** All Users Method : GET ****************
*******************************************************        
      https://library2021-api.herokuapp.com/api/user


*******************************************************
*************** ADD Users Method : POST ***************
*******************************************************  
      https://library2021-api.herokuapp.com/api/user
        Example>>>>>
            {
            "fname" : "Juan",
            "lname":"Lopez",
            "email" : "Pruebas@gmail.com",
            "role": "Librarian",
            "password":"123"
            }
*******************************************************
*************** Edit User Method : POST **************
*******************************************************                
          https://library2021-api.herokuapp.com/api/user/6127dcbbb7b04a42b9d6380c
           Example>>>>>
            {
            "fname" : "Juan Antonio",
            "lname":"Lopez Rodriguez",
            "email" : "Pruebas@gmail.com",
            "role": "Librarian",
            "password":"123"
            }
*******************************************************
*************** all books Method : GET **************
*******************************************************     
https://library2021-api.herokuapp.com/api/books

*******************************************************
*************** add book Method : POST **************
******************************************************* 
https://library2021-api.herokuapp.com/api/books

    Example>>>>
        {
        "title": "Don quijote de la mancha",
        "author": "Miguel de Cervantes",
        "genre": "Sátira, Parodia, Farsa, Novela psicológica",
        "year": 1605,
        "amount": 25
        }
 *******************************************************
*************** add book Method : PUT **************
******************************************************* 
https://library2021-api.herokuapp.com/api/books/6127bfbe093f8d984c7213a2

       Example>>>>
        {
        "title": "Don quijote ",
        "author": "Miguel de Cervantes",
        "genre": "Sátira, Parodia, Farsa, Novela psicológica",
        "year": 1605,
        "amount": 25
        }
        
*******************************************************
*************** all loans Method : GET **************
*******************************************************     
https://library2021-api.herokuapp.com/api/loans

*******************************************************
*************** add loans Method : POST **************
*******************************************************     
https://library2021-api.herokuapp.com/api/loans

{  
    "idUser":"6127e2852712f7b150b42964",
    "idBook":"6127bfbe093f8d984c7213a2",
    "status":0
}

*******************************************************
*************** EDIT loans Method : PUT **************
*******************************************************     
https://library2021-api.herokuapp.com/api/loans

{  
    
    "status":1
}
        
