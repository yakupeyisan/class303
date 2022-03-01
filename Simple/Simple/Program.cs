using System;
using System.Collections.Generic;

namespace Simple
{
    public class WriteAttribute : Attribute
    {
        public bool Writable = false;
    }
    public interface IData
    {
        [Write(Writable =true)]
        public int Id { get; set; }
        [Write(Writable = true)]
        public string Name { get; set; }
    }
    public class User:IData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public User()
        {

        }
        //constructor
        public User(int id, string name)
        {
            this.Id = id;
            this.Name = name;
        }
    }
    public class Book : IData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Book()
        {

        }
        //constructor
        public Book(int id, string name)
        {
            this.Id = id;
            this.Name = name;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            /*Console.WriteLine("1");
            Console.WriteLine("2");
            Console.WriteLine("3");
            Console.WriteLine("4");
            Console.WriteLine("5");
            Console.WriteLine("6");
            for (int i = 1; i < 100; i++)
            {
                Console.WriteLine(i.ToString());
            }
            CustomLoop(1,100);
            List<User> users = new List<User>();
            users.Add(new User() { Id=1,Name="Çisem" });
            users.Add(new User(2,"Yalçın"));
            users.Add(new User(3,"Yasin"));
            users.Add(new User(4,"Mirayet"));
            users.Add(new User(5,"Meryem"));
            users.Add(new User(6,"Gümüşhaneli"));
            users.Add(new User(7,"Mikdat"));
            users.Add(new User(8,"Bilge"));
            for (int i = 0; i < users.Count; i++)
            {
                Console.WriteLine(users[i].Id + " \t" + users[i].Name);
            }
            Console.WriteLine("-----------------------------");
            foreach (var user in users)
            {
                Console.WriteLine(user.Id + " \t" + user.Name);
            }
            Console.WriteLine("-----------------------------");
            users.ForEach(user => { Console.WriteLine(user.Id + " \t" + user.Name); });
            */
            var datas = new List<IData>();
            datas.Add(new Book(1,"Sefiller"));
            datas.Add(new User(1,"Ali"));
            //ReadData(datas);
            datas.WriteNames();

        }
        public static void CustomLoop(int start, int end)
        {
            startCode:
                Console.WriteLine(start.ToString());
                start++;
            if(start<end)
                goto startCode;
        }

        public static void ReadData(List<IData> items)
        {
            foreach (var item in items)
            {
                Console.WriteLine(item.Name);
            }
        }
    }
    public static class DataExtensions
    {
        public static void WriteNames(this List<IData> datas)
        {
            Console.WriteLine("Write Names is started.");
            foreach (var item in datas)
            {
                Type type = typeof(IData);

                foreach (var property in type.GetProperties())
                {
                    WriteAttribute writeAttribute = property.GetCustomAttributes(typeof(WriteAttribute),false)[0] as WriteAttribute;
                    if (writeAttribute.Writable)
                    {
                        Console.WriteLine(property.GetValue(item));
                    }
                }
            }
        }
    }
}
