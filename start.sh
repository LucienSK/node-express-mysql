#!/bin/bash
### BEGIN INIT INFO
# Provides:          lucien
# Required-Start:    $all
# Required-Stop:     $all
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: 开启express服务
# Description:       自动开启服务
### END INIT INFO
# chkconfig: 345 88 08
# description: Forever for Node.js

STARTPATH=/home/linglingbang/bin/www   #这里须要填写你自己的Node项目的启动脚本文件
LOG=/home/linglingbang/logs/forever.log  #可选。日志文件文件夹
OLOG=/home/linglingbang/logs/out.log  #可选。日志文件文件夹
ELOG=/home/linglingbang/logs/error.log  #可选。日志文件文件夹
PID=/home/linglingbang/pid  #必填内容。用于记录forever的进程号

export PATH=$PATH:/usr/local/bin  #在这里指定一下Node的可运行程序安装文件夹，我的是/usr/local/bin
export NODE_PATH=$NODE_PATH:/root/soft/node/lib/node_modules  #这里是Node类库的路径

#往下的内容就不用改动了

node=node
forever=forever

case "$1" in
    start)
        $forever start -l $LOG -o $OLOG -e $ELOG --pidFile $PID -a $STARTPATH
        ;;
    stop)
        $forever stop --pidFile $PID $STARTPATH
        ;;
    stopall)
        $forever stopall --pidFile $PID
        ;;
    restartall)
        $forever restartall --pidFile $PID
        ;;
    reload|restart)
        $forever restart -l $LOG -o $OLOG -e $ELOG --pidFile $PID -a $STARTPATH
        ;;
    list)
        $forever list
        ;;
    *)
        echo "Usage: /etc.init.d/node {start|stop|restart|reload|stopall|restartall|list}"
        exit 1
        ;;
esac