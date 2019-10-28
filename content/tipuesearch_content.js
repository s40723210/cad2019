var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'Week2-5 \n Week6-9 \n Week10-14 \n Week15-18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week2-5', 'text': '建立個人cad2019倉儲 \n 1.下載 2019Fall可攜套件.7z ，完成後開啟start。 2.先登入自己的github帳號， 創建一個新的倉儲cad2019。 3.進入要存放該資料的資料夾tmp。 4.git clone\xa0 https://github.com/s40723210/cad2019 。 5. git submodule add https://github.com/mdecourse/cmsimde.git。 6.再進入cmsimde，輸入python -m pip install flask_cors。 7.完成後，python wsgi.py 開始編輯倉儲。 8.login密碼為admin，gitconfig要有帳號密碼。 9.處理完，git status > git add . > git commit -m "標題" > git push。 10.開啟github倉儲設定，點選要推送的branch即可。 \n 我的教學影片(有字幕): https://youtu.be/jBFzju1F43s \n \n Solvespace 編譯 \n \n \n 1.將Y:\\portablegit\\bin\\sh.exe的sh.exe改成 > sh_rename_for_solvespace.exe。 \n 2.到tmp下git clone --recurse-submodules https://github.com/solvespace/solvespace.git 。 \n 3.進入tmp下的solvespace\\extlib\\angle\\CMakeLists.txt。 \n 4.將CMakeLists.txt中的第713 and 714行前面加上#。 \n 5. cd solvespace/extlib/libpng >\xa0 mkdir build >\xa0cd build。 \n 6.cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release >\xa0mingw32-make。 \n 7. 把libpng.dll.a 改名為 libpng_static.a 並放到Y:/msys64\\mingw64\\lib。 \n 8.在solvespace建立build資料夾，在cd build。 \n 9.cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release >\xa0mingw32-make。 \n 10.到bin內開啟solvespace程式，把需要的檔案從Y:/msys64\\mingw64\\bin拿。 \n \n 我的教學影片(有字幕): https://youtu.be/s5Onnb9CPSI \n \n 解決cmake .. -G的Erro \n 在用cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release執行時，碰到了 Y:/msys64/mingw64/bin/gcc.exe -- broken，無法執行的時候，是因為在路徑上有中文字，才讓程式出現錯誤的，以下是我的如何處理的影片。 \n 我的教學影片(有字幕): https://youtu.be/yS-NvOgfCRY \n \n Solvespace 操作 \n 1.進入課程選擇你要操作的Solvespace。 2.開啟自己隨身的Solvespace程式。 3.選取圖示或使用快捷鍵來進行繪畫。 4.將邊長設定為同等大小，再 長出形成一個立體圖。 6.讓長出的長度也同等大小，就能做出一個正方形。 7.點選右邊的框框來更改外觀和透明度。 8.存檔存為html檔，再來建立一個基本的網頁html。 7.輸入指令來將該圖檔導入，就有完整的網頁html。 ☆可參照我的 \xa0 SolveSpace快捷鍵 \n 成品圖(可滑鼠拖移): 我的操作影片(有字幕): https://youtu.be/4ujff-3Hbkc \n \n \n', 'tags': '', 'url': 'Week2-5.html'}, {'title': 'Week6-9', 'text': "參數化零組件繪製 \n 1.開啟老師的雙輪車圖和Solvesoace。 2.先畫車身，用一個凹型然後長出。 3.在除掉一個方形， 用difference將該部位去除 。 4.畫一個放輪軸的洞，除料一直線。 5.畫後輪一個圓柱，在畫一個半圓旋轉長出。 6.這樣就完成了車身了，存檔起來，開新檔。 7. C快捷鍵繪製一圓 輪子，圓形給厚度，再畫軸。 8.開剛剛的車身來組合，即可完成雙輪車。 \n ☆可參照我的 \xa0 SolveSpace快捷鍵 \n 成品圖(可滑鼠拖移): \n \n 我的操作影片(有字幕): https://youtu.be/c-6eKPufTlE \n \n \n 網際 V-rep 模型控制 \n 1. 先到Task1裡，下載V-rep 3.6.1 rev 4.7z和\xa0web_vrep2.zip。 2.將兩個檔案都解壓縮在自己的隨身碟tmp裡面。 3.打開自己的start_mdecourse，輸入regedit開啟程式。 4.將HKEY_CLASSES_ROOT內的，.py和.py_auto_file刪除。 5.開啟web_vrep2的 app.py，點Tools的Go。 6.再點開剛剛載好的 V-REP3\\V-REP_PRO_EDU > vrep.exe 。 7.開啟後將 web_vrep2的 two_wheeler.ttt拖移進去。 8.到 http://127.0.0.1:5000/裡面，就可以操控了。 \n 我的操作影片(有字幕): https://youtu.be/2nrqVEW3qAc \n \n \n 新增啟動與停止按鈕 \n 1.進入2b Task 1的\xa0 #14 \xa0，準備操作。 2.開啟start_mdecoursr，進入web_vrep2。 3.編輯templates裡面的controls.html。 4.加入start 和 stop 的botton，直接複製改。 5.編輯vrep_linefollower.py，if加入判斷式。 if direction == 'start':\xa0 vrep.simxStartSimulation(self.clientID, vrep.simx_opmode_oneshot) if direction == 'stop':\xa0 vrep.simxStopSimulation(self.clientID, vrep.simx_opmode_oneshot) 6.補上else: ，完成後儲存，記得語法要排好。 7.開啟v-rep程式，將 two_wheeler.ttt檔案拖入。 8.再開啟app.py 的go進入網址localhost:5000。 9.這樣子就可以進行start 以及 stop的操作了。 \n 我的教學影片: https://youtu.be/fsWnXIUaZN8 \n \n \n Solvespace 納入學號 \n 1.先到自己tmp下的solvespace\\build\\src\\CMakeFiles\\solvespace.dir。 2.刪掉solvespace.cpp.obj檔案，開啟start_mdecourse。 3.再到solvespace\\src找到solvespace.cpp用編輯器打開。 4.Ctrl+f 搜尋GPL，把Message下面的This is SolveSpace 。 5.改成This is SolveSpace is compiled by 40723210。 6.進入solvespace\\build，輸入 mingw32-make，等待完成。 8.開啟solvespace.exe，點help > about 就完成了驗證。 我的教學影片(有字幕): https://youtu.be/rd_2Q----oA \n \n \n Solvespace 繪圖驗證 \n 零件第7題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/AKpY8QwDO6s \n \n 零件第1題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/xgYM__8kUpI \n \n 零件第3題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/gNmqjGbAn70 \n \n 零件第4題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/6eByaG62f7Q \n \n 零件第6題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/JuvvhxtFOUI \n \n \n 零件第8題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/_O6a6oaFAJw \n \n 零件第9題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): \n 零件第10題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/scgrvxGnqGE \n \n 零件第11題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/b07TfCOscfg \n \n 零件第12題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/LwCUEgcbBps \n \n 零件第13題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/jkpvg-6Rbag \n \n 零件第14題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/-AZChpDNk0U \n \n 零件第15題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/iUxtuX9dR1M \n \n 零件第16題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/GzioJn-QpB8 \n \n 零件第17題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/hwl_d8r8Hjw \n \n 零件第18題 \n 成品圖(可滑鼠拖移): \n \n 我的教學影片(有字幕): https://youtu.be/AN-aUGVQRVg \n", 'tags': '', 'url': 'Week6-9.html'}, {'title': 'Week10-14', 'text': '', 'tags': '', 'url': 'Week10-14.html'}, {'title': 'Week15-18', 'text': '\n', 'tags': '', 'url': 'Week15-18.html'}, {'title': 'Notes', 'text': 'vi 與 vim 的指令整理 \n 編輯模式 \n \n \n \n 指令 \n 說明 \n \n \n i \n 在游標位置進入編輯模式 \n \n \n I \n 在游標行的第一個非空白字元進入編輯模式 \n \n \n a \n 在游標位置後進入編輯模式 \n \n \n A \n 在游標行的最後一個字元進入編輯模式 \n \n \n o \n 向下新增一行，並進入編輯模式 \n \n \n O \n 向上新增一行，並進入編輯模式 \n \n \n cc \n 刪除游標行，並進入編輯模式 \n \n \n h 或 向左方向鍵 \n 游標向左移動一個字元 \n \n \n j 或 向下方向鍵 \n 游標向下移動一個字元 \n \n \n k 或 向上方向鍵 \n 游標向上移動一個字元 \n \n \n l 或 向右方向鍵 \n 游標向右移動一個字元 \n \n \n [ESC] \n 取消指令或退出編輯模式 \n \n \n \n 刪除 \n \n \n \n 指令 \n 說明 \n \n \n dd \n 刪除游標行 \n \n \n 行數 \xa0 → dd \n 刪除 n 行 \n \n \n dG \n 刪除游標行到最後一行 \n \n \n d1G \n 刪除游標行到第一行 \n \n \n d$ \n 刪除游標處到最後一個字元 \n \n \n d0 \n 刪除游標處到第一個字元 \n \n \n \n 檔案功能 \n \n \n \n 指令 \n 說明 \n \n \n :w \n 存檔 (加 ! 表示強制存檔) \n \n \n :w \xa0 檔案名稱 \n 另存新檔 \n \n \n :q \n 退出 vi (加 ! 表示不存檔強制退出) \n \n \n :wq \n 存檔並退出 vi \n \n \n : x \n 存檔並退出 vi \n \n \n :e \xa0 檔案名稱 \n 編輯其它檔案 \n \n \n :e! \n 還原至檔案編修前的狀態 \n \n \n :r \xa0 檔案名稱 \n 讀入檔案內容，並加到游標行的後面 \n \n \n :n \n 切換到下一個開啟的檔案 \n \n \n :N \n 切換到上一個開啟的檔案 \n \n \n :set nu \n 顯示行號 \n \n \n :set nonu \n 取消行號顯示 \n \n \n :files \n 列出所有開啟的檔案 \n \n \n :Ex \n 開啟檔案瀏覽器 \n \n \n :Ex \xa0 路徑 \n 於指定路徑開啟檔案瀏覽器 \n \n \n \n SolveSpace的快捷鍵 \n \n \n \n 1.文件菜單 \n \n \n Ctrl \xa0 + \xa0 N \n 新建 \n \n \n Ctrl \xa0 + \xa0 O \n 打開 \n \n \n Ctrl \xa0 + \xa0 S \n 儲存 \n \n \n \n \n \n \n \n 2.編輯菜單 \n \n \n Ctrl \xa0 + \xa0 Z \n 撤消 \n \n \n Ctrl \xa0 + \xa0 Y \n 重做 \n \n \n Space \n 全部重新生成 \n \n \n . \n 將選擇對齊到網格 \n \n \n 9 \n 旋轉導入90° \n \n \n Ctrl \xa0 + \xa0 X \n 剪下 \n \n \n Ctrl \xa0 + \xa0 C \n 複製 \n \n \n Ctrl \xa0 + \xa0 V \n 貼上 \n \n \n Ctrl \xa0 + \xa0 T \n 粘貼變形 \n \n \n Del \n 刪除 \n \n \n Ctrl \xa0 + \xa0 E \n 選擇邊緣鏈 \n \n \n Ctrl \xa0 + \xa0 A \n 全選 \n \n \n Esc \n 全部取消選擇 \n \n \n \n \n \n \n \n 3.查看菜單 \n \n \n + \n 放大 \n \n \n -- \n 縮小 \n \n \n F \n 縮放至 適合 \n \n \n W \n 將視圖與工作平面對齊 \n \n \n F2 \n 最近的正交視圖 \n \n \n F3 \n 最近的等軸測圖 \n \n \n F4 \n 視點中心 \n \n \n > \n 顯示捕捉網格 \n \n \n ` \n 使用透視投影 \n \n \n Tad \n 顯示文字視窗 \n \n \n \n \n \n \n \n 5.素描 \n \n \n 2 \n 在工作平面 \n \n \n 3 \n 3D的任何地方 \n \n \n P \n 基準點 \n \n \n S \n 線段 \n \n \n R \n 矩形 \n \n \n C \n 圓 \n \n \n A \n 圓弧 \n \n \n B \n 三次曲線樣條 \n \n \n T \n 真型字體文本 \n \n \n G \n 切換構造 \n \n \n Shift \xa0 + \xa0 A \n 點切線弧 \n \n \n I \n 在相交處分割曲線 \n \n \n \n \n \n \n \n 6.約束 \n \n \n D \n 距離/直徑 \n \n \n N \n 角度 \n \n \n U \n 其他輔助角 \n \n \n E \n 切換參考昏暗 \n \n \n H \n 設定水平 \n \n \n V \n 設定垂直 \n \n \n O \n 在點/曲線/平面上 \n \n \n Q \n 等長/半徑/角度 \n \n \n Z \n 長度比 \n \n \n M \n 在中點 \n \n \n Y \n 對稱的 \n \n \n L \n 平行/切線 \n \n \n X \n 相同方向 \n \n \n ] \n 拖延的鎖定點 \n \n \n ; \n 註解 \n \n \n \n \n \n \n \n 4.形成 \n \n \n Shift \xa0 + \xa0 3 \n 3D素描 \n \n \n Shift \xa0 + \xa0 W \n 在新工作平面中素描 \n \n \n Shift \xa0 + \xa0 T \n 逐步 放置 \n \n \n Shift \xa0 + \xa0 R \n 步進旋轉 \n \n \n Shift \xa0 + \xa0 X \n 拉伸 \n \n \n Shift \xa0 + \xa0 L \n 旋轉拉伸 \n \n \n Shift \xa0 + \xa0 I \n 導入/組裝 \n \n \n \n Video device \n 我是使用ShareX 如圖(一) 來進行拍攝影片的如圖(一)，拍攝完成後再使用aegisub 如圖(二)來進行字幕的撰寫，最後再將字幕與影片融合，用arctime如圖(三)來進行融合與匯出影片的。 \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 圖(一) \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 圖(二) \n \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 圖(三)', 'tags': '', 'url': 'Notes.html'}, {'title': 'About', 'text': '個人倉儲網址: https://github.com/s40723210/cad2019 \n 個人blogger: https://40723210.blogspot.com/ \n 個人youtube: https://www.youtube.com/channel/UC8l7lxn3l0ENuxYDhLjgxRw \n *我有導入無法將文字選取起來的javascript，並不是bug。 \n \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};