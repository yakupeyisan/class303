USE [StudentDb]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 25.02.2022 17:21:01 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Users]') AND type in (N'U'))
DROP TABLE [dbo].[Users]
GO
/****** Object:  Table [dbo].[UserInformations]    Script Date: 25.02.2022 17:21:01 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UserInformations]') AND type in (N'U'))
DROP TABLE [dbo].[UserInformations]
GO
/****** Object:  Table [dbo].[UserFaculities]    Script Date: 25.02.2022 17:21:01 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UserFaculities]') AND type in (N'U'))
DROP TABLE [dbo].[UserFaculities]
GO
/****** Object:  Table [dbo].[Teachers]    Script Date: 25.02.2022 17:21:01 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Teachers]') AND type in (N'U'))
DROP TABLE [dbo].[Teachers]
GO
/****** Object:  Table [dbo].[Students]    Script Date: 25.02.2022 17:21:01 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Students]') AND type in (N'U'))
DROP TABLE [dbo].[Students]
GO
/****** Object:  Table [dbo].[Poets]    Script Date: 25.02.2022 17:21:01 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Poets]') AND type in (N'U'))
DROP TABLE [dbo].[Poets]
GO
/****** Object:  Table [dbo].[PoetBooks]    Script Date: 25.02.2022 17:21:01 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PoetBooks]') AND type in (N'U'))
DROP TABLE [dbo].[PoetBooks]
GO
/****** Object:  Table [dbo].[Faculties]    Script Date: 25.02.2022 17:21:01 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Faculties]') AND type in (N'U'))
DROP TABLE [dbo].[Faculties]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 25.02.2022 17:21:01 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Categories]') AND type in (N'U'))
DROP TABLE [dbo].[Categories]
GO
/****** Object:  Table [dbo].[Books]    Script Date: 25.02.2022 17:21:01 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Books]') AND type in (N'U'))
DROP TABLE [dbo].[Books]
GO
USE [master]
GO
/****** Object:  Database [StudentDb]    Script Date: 25.02.2022 17:21:01 ******/
DROP DATABASE [StudentDb]
GO
/****** Object:  Database [StudentDb]    Script Date: 25.02.2022 17:21:01 ******/
CREATE DATABASE [StudentDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'StudentDb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\StudentDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'StudentDb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\StudentDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [StudentDb] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [StudentDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [StudentDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [StudentDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [StudentDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [StudentDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [StudentDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [StudentDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [StudentDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [StudentDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [StudentDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [StudentDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [StudentDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [StudentDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [StudentDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [StudentDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [StudentDb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [StudentDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [StudentDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [StudentDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [StudentDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [StudentDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [StudentDb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [StudentDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [StudentDb] SET RECOVERY FULL 
GO
ALTER DATABASE [StudentDb] SET  MULTI_USER 
GO
ALTER DATABASE [StudentDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [StudentDb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [StudentDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [StudentDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [StudentDb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [StudentDb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'StudentDb', N'ON'
GO
ALTER DATABASE [StudentDb] SET QUERY_STORE = OFF
GO
USE [StudentDb]
GO
/****** Object:  Table [dbo].[Books]    Script Date: 25.02.2022 17:21:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Books](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[VolumeNumber] [nvarchar](50) NULL,
	[Barcode] [nvarchar](50) NULL,
	[CategoryId] [int] NULL,
 CONSTRAINT [PK_Books] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 25.02.2022 17:21:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Faculties]    Script Date: 25.02.2022 17:21:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Faculties](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Faculties] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PoetBooks]    Script Date: 25.02.2022 17:21:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PoetBooks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PoetId] [int] NULL,
	[BookId] [int] NULL,
 CONSTRAINT [PK_PoetBooks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Poets]    Script Date: 25.02.2022 17:21:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Poets](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nvarchar](250) NULL,
 CONSTRAINT [PK_Poets] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Students]    Script Date: 25.02.2022 17:21:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Students](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[StudentNumber] [nvarchar](50) NULL,
	[Lesson] [nvarchar](50) NULL,
 CONSTRAINT [PK_Students] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Teachers]    Script Date: 25.02.2022 17:21:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Teachers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[CardNumber] [nvarchar](50) NULL,
 CONSTRAINT [PK_Teachers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserFaculities]    Script Date: 25.02.2022 17:21:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserFaculities](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[FacultyId] [int] NULL,
 CONSTRAINT [PK_UserFaculities] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserInformations]    Script Date: 25.02.2022 17:21:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserInformations](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[IdentificationNumber] [bigint] NULL,
 CONSTRAINT [PK_UserInformations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 25.02.2022 17:21:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](150) NULL,
	[Password] [nvarchar](250) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Books] ON 
GO
INSERT [dbo].[Books] ([Id], [Name], [VolumeNumber], [Barcode], [CategoryId]) VALUES (1, N'Sefiller', N'No: 01', N'123', 1)
GO
INSERT [dbo].[Books] ([Id], [Name], [VolumeNumber], [Barcode], [CategoryId]) VALUES (2, N'Hayvan Çiftliği', N'No: 19', N'122', 1)
GO
INSERT [dbo].[Books] ([Id], [Name], [VolumeNumber], [Barcode], [CategoryId]) VALUES (3, N'Cesur Yeni Dünya', N'No: 11', N'111', 2)
GO
INSERT [dbo].[Books] ([Id], [Name], [VolumeNumber], [Barcode], [CategoryId]) VALUES (4, N'835 Satır', N'No: 835', N'835', 3)
GO
INSERT [dbo].[Books] ([Id], [Name], [VolumeNumber], [Barcode], [CategoryId]) VALUES (5, N'Üvercinka', N'No: 22', N'812', 3)
GO
INSERT [dbo].[Books] ([Id], [Name], [VolumeNumber], [Barcode], [CategoryId]) VALUES (6, N'Devlet', N'No: 34', N'34', 4)
GO
INSERT [dbo].[Books] ([Id], [Name], [VolumeNumber], [Barcode], [CategoryId]) VALUES (7, N'Metal Fırtına', N'No: 16', N'16', 2)
GO
INSERT [dbo].[Books] ([Id], [Name], [VolumeNumber], [Barcode], [CategoryId]) VALUES (8, N'Sevda Sözleri', N'No: 102', N'102', 3)
GO
SET IDENTITY_INSERT [dbo].[Books] OFF
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 
GO
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (1, N'Roman')
GO
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (2, N'Bilim Kurgu')
GO
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (3, N'Şiir')
GO
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (4, N'Felsefe')
GO
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
SET IDENTITY_INSERT [dbo].[Faculties] ON 
GO
INSERT [dbo].[Faculties] ([Id], [Name]) VALUES (1, N'Akademik')
GO
INSERT [dbo].[Faculties] ([Id], [Name]) VALUES (2, N'Myo')
GO
INSERT [dbo].[Faculties] ([Id], [Name]) VALUES (3, N'Mühendislik')
GO
SET IDENTITY_INSERT [dbo].[Faculties] OFF
GO
SET IDENTITY_INSERT [dbo].[PoetBooks] ON 
GO
INSERT [dbo].[PoetBooks] ([Id], [PoetId], [BookId]) VALUES (1, 1, 1)
GO
INSERT [dbo].[PoetBooks] ([Id], [PoetId], [BookId]) VALUES (2, 2, 2)
GO
INSERT [dbo].[PoetBooks] ([Id], [PoetId], [BookId]) VALUES (3, 3, 3)
GO
INSERT [dbo].[PoetBooks] ([Id], [PoetId], [BookId]) VALUES (4, 4, 4)
GO
INSERT [dbo].[PoetBooks] ([Id], [PoetId], [BookId]) VALUES (5, 5, 5)
GO
INSERT [dbo].[PoetBooks] ([Id], [PoetId], [BookId]) VALUES (6, 6, 6)
GO
INSERT [dbo].[PoetBooks] ([Id], [PoetId], [BookId]) VALUES (7, 7, 7)
GO
INSERT [dbo].[PoetBooks] ([Id], [PoetId], [BookId]) VALUES (8, 8, 7)
GO
INSERT [dbo].[PoetBooks] ([Id], [PoetId], [BookId]) VALUES (9, 5, 8)
GO
SET IDENTITY_INSERT [dbo].[PoetBooks] OFF
GO
SET IDENTITY_INSERT [dbo].[Poets] ON 
GO
INSERT [dbo].[Poets] ([Id], [FullName]) VALUES (1, N'Victor Hugo')
GO
INSERT [dbo].[Poets] ([Id], [FullName]) VALUES (2, N'George Orwell')
GO
INSERT [dbo].[Poets] ([Id], [FullName]) VALUES (3, N'Aldous Euxlhy')
GO
INSERT [dbo].[Poets] ([Id], [FullName]) VALUES (4, N'Nazım Hikmet')
GO
INSERT [dbo].[Poets] ([Id], [FullName]) VALUES (5, N'Cemal Süreya')
GO
INSERT [dbo].[Poets] ([Id], [FullName]) VALUES (6, N'Platon')
GO
INSERT [dbo].[Poets] ([Id], [FullName]) VALUES (7, N'Orkun Uçar')
GO
INSERT [dbo].[Poets] ([Id], [FullName]) VALUES (8, N'Burak Turna')
GO
SET IDENTITY_INSERT [dbo].[Poets] OFF
GO
SET IDENTITY_INSERT [dbo].[Students] ON 
GO
INSERT [dbo].[Students] ([Id], [UserId], [StudentNumber], [Lesson]) VALUES (1, 1, N'1231', N'Kbt303')
GO
INSERT [dbo].[Students] ([Id], [UserId], [StudentNumber], [Lesson]) VALUES (2, 2, N'1232', N'Kbt202')
GO
INSERT [dbo].[Students] ([Id], [UserId], [StudentNumber], [Lesson]) VALUES (3, 3, N'1233', N'Kbt303')
GO
INSERT [dbo].[Students] ([Id], [UserId], [StudentNumber], [Lesson]) VALUES (4, 4, N'1234', N'Kbt303')
GO
INSERT [dbo].[Students] ([Id], [UserId], [StudentNumber], [Lesson]) VALUES (5, 5, N'1235', N'Kbt202')
GO
SET IDENTITY_INSERT [dbo].[Students] OFF
GO
SET IDENTITY_INSERT [dbo].[Teachers] ON 
GO
INSERT [dbo].[Teachers] ([Id], [UserId], [CardNumber]) VALUES (1, 6, N'1121')
GO
INSERT [dbo].[Teachers] ([Id], [UserId], [CardNumber]) VALUES (2, 1, N'1122')
GO
SET IDENTITY_INSERT [dbo].[Teachers] OFF
GO
SET IDENTITY_INSERT [dbo].[UserFaculities] ON 
GO
INSERT [dbo].[UserFaculities] ([Id], [UserId], [FacultyId]) VALUES (1, 1, 2)
GO
INSERT [dbo].[UserFaculities] ([Id], [UserId], [FacultyId]) VALUES (2, 2, 3)
GO
INSERT [dbo].[UserFaculities] ([Id], [UserId], [FacultyId]) VALUES (3, 3, 2)
GO
INSERT [dbo].[UserFaculities] ([Id], [UserId], [FacultyId]) VALUES (4, 4, 2)
GO
INSERT [dbo].[UserFaculities] ([Id], [UserId], [FacultyId]) VALUES (5, 5, 3)
GO
INSERT [dbo].[UserFaculities] ([Id], [UserId], [FacultyId]) VALUES (6, 6, 1)
GO
INSERT [dbo].[UserFaculities] ([Id], [UserId], [FacultyId]) VALUES (7, 1, 1)
GO
SET IDENTITY_INSERT [dbo].[UserFaculities] OFF
GO
SET IDENTITY_INSERT [dbo].[UserInformations] ON 
GO
INSERT [dbo].[UserInformations] ([Id], [UserId], [FirstName], [LastName], [IdentificationNumber]) VALUES (1, 1, N'Büşra', N'Kırmızıkaya', 1)
GO
INSERT [dbo].[UserInformations] ([Id], [UserId], [FirstName], [LastName], [IdentificationNumber]) VALUES (2, 2, N'Yalçın', N'Uzun', 2)
GO
INSERT [dbo].[UserInformations] ([Id], [UserId], [FirstName], [LastName], [IdentificationNumber]) VALUES (3, 3, N'Bilge', N'Yılmaz', 3)
GO
INSERT [dbo].[UserInformations] ([Id], [UserId], [FirstName], [LastName], [IdentificationNumber]) VALUES (4, 4, N'Yasin', N'Göktepe', 4)
GO
INSERT [dbo].[UserInformations] ([Id], [UserId], [FirstName], [LastName], [IdentificationNumber]) VALUES (5, 5, N'Melisa', N'Gürgöze', 5)
GO
INSERT [dbo].[UserInformations] ([Id], [UserId], [FirstName], [LastName], [IdentificationNumber]) VALUES (6, 6, N'Yakup', N'Eyisan', 6)
GO
SET IDENTITY_INSERT [dbo].[UserInformations] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 
GO
INSERT [dbo].[Users] ([Id], [Username], [Password]) VALUES (1, N'busra', N'123')
GO
INSERT [dbo].[Users] ([Id], [Username], [Password]) VALUES (2, N'yalcin', N'2')
GO
INSERT [dbo].[Users] ([Id], [Username], [Password]) VALUES (3, N'bilge', N'3')
GO
INSERT [dbo].[Users] ([Id], [Username], [Password]) VALUES (4, N'yasin', N'4')
GO
INSERT [dbo].[Users] ([Id], [Username], [Password]) VALUES (5, N'yasemin', N'5')
GO
INSERT [dbo].[Users] ([Id], [Username], [Password]) VALUES (6, N'yakup', N'6')
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
USE [master]
GO
ALTER DATABASE [StudentDb] SET  READ_WRITE 
GO
