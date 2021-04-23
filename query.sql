create database Nodejs
use Nodejs

create table tasks(
id int identity(1, 1) primary key,
task nvarchar(20) not null,
status bit not null,
createdAt datetime not null default GETDATE()
)