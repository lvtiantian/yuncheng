SET NAMES utf8;
DROP DATABASE IF EXISTS yc;
CREATE DATABASE yc CHARSET=UTF8;
USE yc;
CREATE TABLE yc_users(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	user_name varchar(100),
	user_pwd varchar(100)
);
INSERT INTO yc_users VALUES(NULL, 'lvtian', '123456');
INSERT INTO yc_users VALUES(NULL, 'majili', '123456');
INSERT INTO yc_users VALUES(NULL, 'xuyanru', '123456');

CREATE TABLE yc_msgs(
	msg_id INT PRIMARY KEY AUTO_INCREMENT,
	user_name varchar(100),
	msg_title varchar(20),
	msg_content varchar(1024),
	date bigint
);
INSERT INTO yc_msgs VALUES(NULL,'lvtian', '你好,世界', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, eaque, error est eum fuga id incidunt molestias nemo neque numquam praesentium provident quisquam quod ratione, recusandae repellat similique ut veniam!',1472103940308);
INSERT INTO yc_msgs VALUES(NULL,'majili', '不好,世界', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, eaque, error est eum fuga id incidunt molestias nemo neque numquam praesentium provident quisquam quod ratione, recusandae repellat similique ut veniam!',1473113940308);
