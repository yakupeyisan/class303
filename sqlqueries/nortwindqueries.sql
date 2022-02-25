Select * from Employees 
order by TitleOfCourtesy


Select TitleOfCourtesy, count(*) as 'Qty' from Employees
Group By TitleOfCourtesy

Select Employees.EmployeeID,
Employees.FirstName,
Employees.LastName,
Orders.*
from Employees
INNER JOIN Orders ON Employees.EmployeeID=Orders.EmployeeID
WHERE Employees.EmployeeID=1



Select Employees.EmployeeID,
Employees.FirstName,
Employees.LastName,
COUNT(*) as 'Qty'
from Employees
INNER JOIN Orders ON Employees.EmployeeID=Orders.EmployeeID
GROUP BY Employees.EmployeeID,Employees.FirstName,Employees.LastName
Having Count(*)>100


select * from (
Select Employees.EmployeeID,
Employees.FirstName,
Employees.LastName,
COUNT(*) as 'Qty'
from Employees
INNER JOIN Orders ON Employees.EmployeeID=Orders.EmployeeID
GROUP BY Employees.EmployeeID,Employees.FirstName,Employees.LastName
) tbl
where tbl.Qty>100


Select Employees.EmployeeID,
Employees.FirstName,
Employees.LastName,
COUNT(*) as 'Qty'
from Employees
INNER JOIN Orders ON Employees.EmployeeID=Orders.EmployeeID
where 100<(Select count(*) from Orders o WHERE o.EmployeeID=Employees.EmployeeID )
GROUP BY Employees.EmployeeID,Employees.FirstName,Employees.LastName



Select * from 
Products
LEFT JOIN [Order Details] ON [Order Details].ProductID=Products.ProductID
where ProductName='Elma'


Use StudentDb;

Select 
Users.*,
Faculties.Name,
UserInformations.FirstName,
UserInformations.LastName,
UserInformations.IdentificationNumber as 'Tc',
IdentificationNumbers.IdentificationNumber,
Students.StudentNumber,
Students.Lesson,
Teachers.CardNumber
from Users
INNER JOIN UserInformations ON Users.Id=UserInformations.UserId
INNER JOIN IdentificationNumbers ON UserInformations.IdentificationNumber=IdentificationNumbers.IdentificationNumber
LEFT JOIN Teachers ON Users.Id=Teachers.UserId
LEFT JOIN Students ON Users.Id=Students.UserId
INNER JOIN	UserFaculities ON Users.Id=UserFaculities.UserId
INNER JOIN	Faculties ON UserFaculities.FacultyId=Faculties.Id



Select 
Books.*,
Poets.FullName,
Categories.Name
from Books
INNER JOIN PoetBooks ON Books.Id=PoetBooks.BookId
INNER JOIN Poets ON PoetBooks.PoetId=Poets.Id
INNER JOIN Categories ON Books.CategoryId=Categories.Id

Begin Transaction
	Begin Try
		INSERT INTO [dbo].[Transactions]([UserId],[Balance])
			 VALUES(1,'-2000');

		INSERT INTO [dbo].[Transactions]([UserId],[Balance])
			 VALUES(2,'20.00');
		Commit
	End Try
	BEGIN Catch
		Rollback
		print 'hata';
	End Catch


Create Procedure MakeTransaction 
    @SenderId int,
    @ReceiverId int,
    @Balance int
as 
INSERT INTO [dbo].[Transactions]([UserId],[Balance])
			 VALUES(@SenderId,-1*@Balance);

INSERT INTO [dbo].[Transactions]([UserId],[Balance])
			 VALUES(@ReceiverId,@Balance);
