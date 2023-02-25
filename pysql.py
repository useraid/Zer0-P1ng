import mysql.connector
from mysql.connector import Error

try:
    connection = mysql.connector.connect(host='localhost',
                                         database='db',
                                         user='root',
                                         password='asdf')
    if connection.is_connected():
        db_Info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
        cursor = connection.cursor()
        
        cursor.execute("Desc Table_1")
        # cursor.execute("Insert into Table_1 values('$name','$id','$ad1','$ad2','$ad3','$dac')")
        ans = cursor.fetchall()
        for i in ans:
            print (i)

except Error as e:
    print("Error while connecting to MySQL", e)
finally:

    if connection.is_connected():    
        cursor.close()
        connection.close()
        print("MySQL connection is closed")







