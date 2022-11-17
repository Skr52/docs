# 常用命令

``` js
1. git add . || 某个文件 // 将代码提交到暂存区
2. git commit -m 描述  // 对提交的代码添加描述内容
3. git push origin master // 将暂存区的代码推送到远程主机分支上
4. git pull git地址 | 分支  // 拉取最新的 git 仓库代码
5. git clone git地址 // 克隆最新的 git 仓库代码
6. git merge 分支 // 在当前分支中合并某个分支
7. git fetch origin 分支 // 在本地拉去远程仓库新建的分支，同步到本地上面。
8. git reflog // 本地分支查看回退版本的commit id
9. git reset --hard a7a7323 // 回退版本 --hard 后面指commit id
10. git push -f origin master // 远程分支回退版本。先本地分支进行回退，在强制推送到远程分支上。 
11. git remote set-url --add origin 远程仓库地址 // 本地仓库中添加一个新的远程仓库地址
12. git rm -r --cached . | 具体文件名称 //清除 git 本地缓存，用于新增的忽略文件提交
// 持续完善。。。

```