# 常用命令

``` js
1. git add  // 将代码存储到暂存区
2. git commit -m 描述  // 将暂存区的代码添加并描述作用
3. git push origin master // 将暂存区的代码推送到远程主机分支上
4. git pull git地址 | 分支  // 拉取最新的 git 仓库代码
5. git clone git地址 // 克隆最新的 git 仓库代码
6. git merge 分支 // 在当前分支中合并某个分支
7. git fetch origin 分支 // 在本地拉去远程仓库新建的分支，同步到本地上面。
8. git reflog // 本地分支查看回退版本的commit id
9. git reset --hard a7a7323 // 回退版本 --hard 后面指commit id
10. git push -f origin master // 远程分支回退版本。先本地分支进行回退，在强制推送到远程分支上。 
11. git remote set-url --add origin 远程仓库地址 // 当前远程仓库添加一个新的远程仓库地址
// 持续完善。。。

```