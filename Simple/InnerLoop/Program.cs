using System;
using System.Collections.Generic;

namespace InnerLoop
{
    public class Book
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public Book()
        {
        }
        public Book(int id, string name)
        {
            Id = id;
            Name = name;
        }

    }
    public class User
    {

        public int Id { get; set; }
        public string FistName { get; set; }
        public string LastName { get; set; }
        public virtual List<Book> ReadedBooks{ get; set; }
        public User() { }
        public User(int id, string fistName, string lastName, List<Book> readedBooks)
        {
            Id = id;
            FistName = fistName;
            LastName = lastName;
            ReadedBooks = readedBooks;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            List<User> users = new List<User>();
            users.Add(
                new User() { Id=1,FistName="Ali",LastName="Veli",ReadedBooks= new List<Book>() { 
                new Book(){ Id=1,Name="Kuyucaklı Yusuf" } } });
            Console.WriteLine("Hello World!");
            users.Add(new User(2, "Ayşe", "Güzel",
                new List<Book>() {
                    new Book(1, "Kuyucaklı Yusuf"),
                    new Book(2,"Sefiller")
                }));
            foreach(var user in users)
            {
                foreach (var book in user.ReadedBooks)
                {
                    Console.WriteLine(user.FistName+" "+user.LastName+" -- "+book.Name);
                }
            }
        }
    }
}
