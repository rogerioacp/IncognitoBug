    import mysql.connector  
      
    #Create the connection object   
    myconn = mysql.connector.connect(host = "0.0.0.0", user = "administrator", passwd = "1234567")  
      
    #printing the connection object   
    print(myconn)  
