--商品表
create table goodsInfo
(
       goodsId varchar(10) primary key,
       goodsName varchar(100),
       goodsType varchar(20),
       goodsPrice float,
       goodsCount int,
       goodsDesc varchar(100),
       goodsImg varchar(100),
       beiyong1  varchar(100),
       beiyong2  varchar(100),
       beiyong3  varchar(100),
       beiyong4  varchar(100),
       beiyong5  varchar(100),
       beiyong6  varchar(100),
       beiyong7  varchar(100),
       beiyong8  varchar(100),
       beiyong9  varchar(100),
       beiyong10  varchar(100),
       beiyong11  varchar(100),
       beiyong12  varchar(100),
       beiyong13  varchar(100)
);

--购物车表
create table shoppingCart(
       vipName varchar(10),
       goodsId varchar(10),
       goodsCount int 
);

select * from shoppingCart 