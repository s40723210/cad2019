var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'Week2-5 \n Week6-9 \n Week10-14 \n Week15-18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week2-5', 'text': '建立個人cad2019倉儲 \n 1.下載 2019Fall可攜套件.7z ，完成後開啟start。 2.先登入自己的github帳號， 創建一個新的倉儲cad2019。 3.進入要存放該資料的資料夾tmp。 4.git clone\xa0 https://github.com/s40723210/cad2019 。 5. git submodule add https://github.com/mdecourse/cmsimde.git。 6.再進入cmsimde，輸入python -m pip install flask_cors。 7.完成後，python wsgi.py 開始編輯倉儲。 8.login密碼為admin，gitconfig要有帳號密碼。 9.處理完，git status > git add . > git commit -m "標題" > git push。 10.開啟github倉儲設定，點選要推送的branch即可。 \n 我的教學影片(有字幕): https://youtu.be/jBFzju1F43s \n \n Solvespace 編譯 \n \n \n 1.將Y:\\portablegit\\bin\\sh.exe的sh.exe改成 > sh_rename_for_solvespace.exe。 \n 2.到tmp下git clone --recurse-submodules https://github.com/solvespace/solvespace.git 。 \n 3.進入tmp下的solvespace\\extlib\\angle\\CMakeLists.txt。 \n 4.將CMakeLists.txt中的第713 and 714行前面加上#。 \n 5. cd solvespace/extlib/libpng >\xa0 mkdir build >\xa0cd build。 \n 6.cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release >\xa0mingw32-make。 \n 7. 把libpng.dll.a 改名為 libpng_static.a 並放到Y:/msys64\\mingw64\\lib。 \n 8.在solvespace建立build資料夾，在cd build。 \n 9.cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release >\xa0mingw32-make。 \n 10.到bin內開啟solvespace程式，把需要的檔案從Y:/msys64\\mingw64\\bin拿。 \n \n 我的教學影片(有字幕): https://youtu.be/s5Onnb9CPSI \n \n 解決cmake .. -G的Erro \n 在用cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release執行時，碰到了 Y:/msys64/mingw64/bin/gcc.exe -- broken，無法執行的時候，是因為在路徑上有中文字，才讓程式出現錯誤的，以下是我的如何處理的影片。 \n 我的教學影片(有字幕): https://youtu.be/yS-NvOgfCRY \n \n Solvespace 操作 \n 1.進入課程選擇你要操作的Solvespace。 2.開啟自己隨身的Solvespace程式。 3.選取圖示或使用快捷鍵來進行繪畫。 4.將邊長設定為同等大小，再 長出形成一個立體圖。 6.讓長出的長度也同等大小，就能做出一個正方形。 7.點選右邊的框框來更改外觀和透明度。 8.存檔存為html檔，再來建立一個基本的網頁html。 7.輸入指令來將該圖檔導入，就有完整的網頁html。 ☆可參照我的 \xa0 SolveSpace快捷鍵 \n 成品圖(可滑鼠拖移): 我的操作影片(有字幕): https://youtu.be/4ujff-3Hbkc \n \n \n', 'tags': '', 'url': 'Week2-5.html'}, {'title': 'Week6-9', 'text': '參數化零組件繪製 \n 1.開啟老師的雙輪車圖和Solvesoace。 2.先畫車身，用一個凹型然後長出。 3.在除掉一個方形， 用difference將該部位去除 。 4.畫一個放輪軸的洞，除料一直線。 5.畫後輪一個圓柱，在畫一個半圓旋轉長出。 6.這樣就完成了車身了，存檔起來，開新檔。 7. C快捷鍵繪製一圓 輪子，圓形給厚度，再畫軸。 8.開剛剛的車身來組合，即可完成雙輪車。 \n ☆可參照我的 \xa0 SolveSpace快捷鍵 \n 成品圖(可滑鼠拖移): \n \n 我的操作影片(有字幕): https://youtu.be/c-6eKPufTlE \n \n \n 網際 V-rep 模型控制 \n 1. 先到Task1裡，下載V-rep 3.6.1 rev 4.7z和\xa0web_vrep2.zip。 2.將兩個檔案都解壓縮在自己的隨身碟tmp裡面。 3.打開自己的start_mdecourse，輸入regedit開啟程式。 4.將HKEY_CLASSES_ROOT內的，.py和.py_auto_file刪除。 5.開啟web_vrep2的 app.py，點Tools的Go。 6.再點開剛剛載好的 V-REP3\\V-REP_PRO_EDU > vrep.exe 。 7.開啟後將 web_vrep2的 two_wheeler.ttt拖移進去。 8.到 http://127.0.0.1:5000/裡面，就可以操控了。 \n 我的操作影片(有字幕): https://youtu.be/2nrqVEW3qAc \n \n \n 新增啟動與停止按鈕 \n 1.進入2b Task 1的\xa0 #14 \xa0，準備操作。 2.開啟start_mdecoursr，進入web_vrep2。 3.編輯templates裡面的controls.html。 4.加入start 和 stop 的botton，直接複製改。 5.編輯vrep_linefollower.py，if加入判斷式。 if direction == \'start\':\xa0 vrep.simxStartSimulation(self.clientID, vrep.simx_opmode_oneshot) if direction == \'stop\':\xa0 vrep.simxStopSimulation(self.clientID, vrep.simx_opmode_oneshot) 6.補上else: ，完成後儲存，記得語法要排好。 7.開啟v-rep程式，將 two_wheeler.ttt檔案拖入。 8.再開啟app.py 的go進入網址localhost:5000。 9.這樣子就可以進行start 以及 stop的操作了。 \n 我的教學影片: https://youtu.be/fsWnXIUaZN8 \n \n \n Solvespace 納入學號 \n 1.先到自己tmp下的solvespace\\build\\src\\CMakeFiles\\solvespace.dir。 2.刪掉solvespace.cpp.obj檔案，開啟start_mdecourse。 3.再到solvespace\\src找到solvespace.cpp用編輯器打開。 4.Ctrl+f 搜尋GPL，把Message下面的This is SolveSpace 。 5.改成This is SolveSpace is compiled by 40723210。 6.進入solvespace\\build，輸入 mingw32-make，等待完成。 8.開啟solvespace.exe，點help > about 就完成了驗證。 我的教學影片(有字幕): https://youtu.be/rd_2Q----oA \n \n \n Solvespace 繪圖驗證 \n #可以使用滑鼠上下移動，尋找想看的教學影片，沒顯示出來就案F5(重新整理)。 \n \n \n 啟用 CMSiMDE 中的網誌系統 \n 1.先開啟start_mdecourse，輸入leo。 2.將config內的pelican.leo拖入leo。 3.到自己的網頁，開啟Home下的bolg。 4.複製網址，把SITEURL = 改成自己的網址。 5.對local-blog點右鍵，案goto script。 6.再到倉儲輸入.py的指令，就可以了。 \n 我的教學影片(有字幕): https://youtu.be/7OKU6LOja3Y \n \n \n 導入 Webots \n 1.到tools下的webots，下載webots_2019b_rev1.7。 2.放到Y槽解壓縮，創建一個 start_webots 。 3.直接複製 start_mdecourse指令，加上老師給的指令。 4.有 執行路徑設定和 啟動指令，符號要打對。 5. 存檔後啟動，只有出現聲音erro就ok了。 \n 我的教學影片(有字幕): https://youtu.be/wiN1nghgnew \n \n \n 以ssh 對 Github 連線 \n 1.先將Y:\\portablegit\\bin下的sh.exe建立起來。 2.輸入sh，輸入 ssh-keygen -t rsa -b 4096 -C "學號 "。 3.在Y: \\home_mdecourse裡創建一個.ssh。 4.輸入 Y: \\home_mdecourse \\.ssh/id_rsa。 5.按完Enter後，下載putty放在Y槽內。 6.編輯 start_mdecourse.bat，加入如下的指令。 Set GIT_HOME=%Disk%:\\portablegit\\bin\\ Set GIT_SSH=%Disk%:\\putty\\plink.exe 7.到自己倉儲的.git，url改成ssh形式。 8.開啟puttygen.exe，將鑰匙存成private key。 9. 開啟putty.exe，設定proxy和路徑，在案save。 10.再到github存入自己的key，就可以了。 \n 我的教學影片(有字幕): https://youtu.be/k-sOF6PQa1I \n \n \n 期中報告 \n 網誌連結: https://s40723210.github.io/cad2019/blog/2018-Fall-32-bit-Windows-w9.html \n 心得: 從Week 2 - Week 9中我學到了很多的東西，這一學期使用的是亂數分組，所以組員有些都不太熟，一開始一樣都是創一個倉儲，然後維護他，將每周的內容和影片都上傳上去，Solvespace 是一個很小的繪圖軟體，可以隨身攜帶，所以非常的方便，只是功能不多而已，它跟我們之前所學的繪圖軟體不太一樣，所以我花了一點的時間去熟悉它，再來就是V-rep 這個軟體，我們教了一下，就換成Webots了，因為Webots是免費的軟體，而且又比V-rep還多功能，所以我很好奇學不學會。 \n 影片連結: https://youtu.be/dWtvxaCwQTg \n \n', 'tags': '', 'url': 'Week6-9.html'}, {'title': 'Week10-14', 'text': '各組開始協同倉儲，因為我是組長就創建第五組倉儲，並且回報lssues，所有的組員都必須要fork分組倉儲，然後使用pull requests來進行更新，也要處理並解決網址、簡報、網誌出現的 markdown 改版衝突，而pull requests有分為正向及反向。 \n 組員擁有(merge)的權力，也就是可以自己進行pull request，不需要經過組長的同意，就可以直接合併(merge)，不過這樣就會出比較多的問題，可能有些人更改的內容直接被蓋掉，要解決的話可能會出現很多衝突，所以不建議給太多人擁有( merge)權力，像是我只有給一位組員( merge)權力，這樣子他就可以幫我審核，其他組員的pull request，也能幫我進行同意合併。 \n pull requests正向 是組員點選New pull request將資料推送回各組倉儲，再由組長進行審核，確認無誤之後即可按同意來合併，有衝突時，組員必須回到fork倉儲，輸入git pull "fork倉儲網址"，再New pull request一次，組長同意後即可。 \n pull requests反向 一樣是組員點選New pull request，不過要特別改成分組倉儲退送至個人倉儲，意思就是把個人的倉儲版次更新，然後在自己點選同意，不過這樣子比較麻煩，還不如直接輸入git pull "fork倉儲網址"，這樣子比較快，直接就更新到最新版次。 \n 第五組倉儲網址: https://s40723210.github.io/cad2019bg5/ \n \n Fork倉儲 \n 1.先登入github，在搜尋自己組的倉儲，點進去。 2.點選右上角的Fork，選擇自己的github。 3.git clone --recurse-submodules\xa0(倉儲網址)。 4.git push完成，點選New pull request，等組長同意。 5.有衝突的話，進行git pull (倉儲網址)\xa0。 6.整合完成之後即可git push，等待組長同意。 \n 我的教學影片(有字幕): https://youtu.be/1bZ16BgmF8c \n \n \n 虛擬主機版NX12 \n 可以在學校外面，使用的正版NX12，不用再去設定 VPN。 \n 1.下載 VirtualBox 以及老師給的 NX12.0.2 虛擬主機板 。 2.設定一下VirtualBox來建立一個虛擬主機。 3.將老師的NX12虛擬硬碟導入虛擬主機裡面。 4.啟動完成後，開啟NX12測試功能是否正常。 5.使用網路探索，來點選網路內的VBOXSVR。 6.新增一個跟主機共用的資料夾，再拉到桌面。 7.再將檔案拖入，回到原本主機檢查，是否有檔案。 \n 我的教學影片(有字幕): \n \n Batch Command設定 \n 1.進入課程網站，Task2的Batch Command。 \n 我的教學影片(有字幕): https://youtu.be/Zw1n_6ba4C8 \n \n \n 導入 GitExtensions', 'tags': '', 'url': 'Week10-14.html'}, {'title': '教科書內容整理', 'text': '2015- Space Modeling with SolidWorks and NX https://link.springer.com/book/10.1007/978-3-319-03862-9 \n 重點整理: Space Modeling with SolidWorks and NX 重點整理.pdf \n', 'tags': '', 'url': '教科書內容整理.html'}, {'title': 'Solidworks-history', 'text': '\n', 'tags': '', 'url': 'Solidworks-history.html'}, {'title': 'NX-history', 'text': '\n', 'tags': '', 'url': 'NX-history.html'}, {'title': 'Inventor-history', 'text': '\n', 'tags': '', 'url': 'Inventor-history.html'}, {'title': 'Creo(ProE)-history', 'text': '\n', 'tags': '', 'url': 'Creo(ProE)-history.html'}, {'title': 'Week15-18', 'text': '\n', 'tags': '', 'url': 'Week15-18.html'}, {'title': 'Notes', 'text': 'git基本指令 \n python基本語法 \n vi 與 vim 的指令整理 \n Dos 基本指令 \n SolveSpace的快捷鍵 \n Video device \n Q&A \n', 'tags': '', 'url': 'Notes.html'}, {'title': 'git基本指令', 'text': '\n mkdir name 創建一個文檔夾 \n rm file 刪除 \n cd name 進入文檔夾 \n pwd 查看當前目錄 \n git init \xa0 把當前目錄變成 git 可以管理的倉庫 生成 .git 文檔夾 \n git add name \xa0 把文檔添加到暫存區 stage \n git commit -m “\xa0” \xa0 把暫存區所有文檔提交到 git 當前分支上（本地倉庫） \n git status \xa0 查看當前 git 倉庫狀態 \n git diff file \xa0 查看修改的文檔內容 \n git log \xa0 查看從最近到最遠的提交日誌 \n git reset --hard \xa0 版本號 \xa0回退到某版本（ HEAD 指向當前版本） \n git push origin HEAD --force 上傳目前(hard)版本 \n git reflog \xa0 查看命令操作歷史 \n git checkout -- file \xa0 \xa0 丟棄工作區文檔的修改 \n git reset HEAD file \xa0 \xa0 丟棄暫存區的文檔 \n git rm file \xa0 刪除工作區文檔後還需刪除 git 中的文檔 \n git checkout --file \xa0 恢復誤刪的 git 文檔 \n 關聯一個遠程倉庫 \xa0 git remote add origin address \n 第一次推送代碼到遠程倉庫 git push -u origin master \n （ -u 會把本地倉庫 master 分支和遠程倉庫的 master 分支 關聯起來） \n 從遠程倉庫克隆代碼到本地 git clone address \n 創建分支 git branch name \n 切換分支 git checkout name\xa0 \xa0 \xa0 \n 查看分支 git branch \n 創建分支並切換到分支上\u3000\u3000git checkout -b name \n 合併指定分支到當前分支上 git merge name \n 合併後刪除分支 git branch -d name \n 合併時出現衝突要手動解決衝突，再提交，最後合併 。 \n 將寫到一半的代碼從工作區拿走存起來 git stash \n 恢復隱藏的代碼到工作區並刪除隱藏位置的代碼 \xa0 \xa0git stash pop \n 強行刪除一個沒有合併過的分支 git branch -D name \n', 'tags': '', 'url': 'git基本指令.html'}, {'title': 'python基本語法', 'text': "● ”#”符號後是註解（comment），可以在一列的開頭或中間加入 ● reserved word or built-in function (變數取名請避開！) ○\xa0 \xa0 \xa0and, exec, not, as, finally, or, assert, for, pass, except ○\xa0 \xa0 \xa0break, from, print, class, global, raise, continue, if, return ○\xa0 \xa0 \xa0def, import, try, del, in, while, elif, is, with, else, lambda, yield ● 縮排視為不同的block (在IF判斷式或迴圈的段落中使用) ○\xa0 \xa0 \xa0縮排可以用tab或是數個空格(至少一個空格)。 ○\xa0 \xa0 \xa0空格的數量不同，視為不同的block (bug很容易因為這一點而發生) ● python的每個變數視為一個object。 \n Python variables \n ● 不需要事先宣告變數，直接用”=“ assign value（賦值）即可。 ○\xa0 \xa0 \xa0x=3.14 → 實數變數 ● 變數類型（data type）根據被賦予的值決定（之後如果被assign不同類型的數 值，該變數的類型就會直接改變） ○\xa0 \xa0 \xa0x=‘text’ → 字串變數 ● 確認變數的data type: type(x) ● 變數名稱中的大小寫要完全一致（a、A會當作不同的變數） ● python可以在同一個指令中對多個變數賦值 ○\xa0 \xa0 \xa0x, y = 2, 1 → x = 2, y = 1 ● 若想要移除變數，使用del x y ● 常見的data type: number, string, list, tuple, boolean \n Simple input/output \n ● input(“…”) 在螢幕上顯示字串，並等待使用者輸入字串 ○\xa0 \xa0 \xa0x = input (“input your name: “) \uf0e0 螢幕上會顯示訊息 input your name:， \xa0 \xa0 \xa0 \xa0使用者輸入的內容，會用字串類型存到x變數 ○\xa0 \xa0 就算使用者輸入數字，仍然是以字串類型儲存（之後會介紹如何切割字串 \xa0 \xa0 \xa0（split），轉為數值） ● print (...) 顯示在螢幕上 ○\xa0 \xa0 \xa0e.g. print (“Hello World!!”) ○\xa0 \xa0 \xa0若要一次輸出多個變數至螢幕上，直接以逗號分開 e.g. print(x,y,z) ○\xa0 \xa0 \xa0也可以format output \n Python variable types \n ● Number 數值 ○\xa0 \xa0 \xa0int : a = 11 ○\xa0 \xa0 \xa0float: a = 1.1e-18 ○\xa0 \xa0 \xa0complex: a = 4. + 7j ● String 字串 （ 用“ “ 或 ‘ ‘夾起） ○\xa0 \xa0 \xa0e.g. x = “Hello World!” or x = ‘Hello World!’ ○\xa0 \xa0 \xa0取出字串的局部：x [0:3] ■\xa0 \xa0 \xa0 \xa0 \xa0注意：index 從 0 開始計算！ ■\xa0 \xa0 \xa0 \xa0 \xa0[a:b] -- begin at index a and end before index b (e.g., x[0:3] -> “Hel”) ○\xa0 \xa0 \xa0不可以對字串的局部做更改，e.g. x[0:3] =”Yo!” (這個是錯誤的語法) ● Boolean 邏輯 ○\xa0 \xa0 \xa0只有True, False兩種值，根據邏輯判斷（IF condition）的結果決定 ○\xa0 \xa0 \xa0兩個boolean 變數做運算，會以True=1, False=0 做整數運算 \n Python variables: list and tuple \n ● list, tuple ○\xa0 \xa0 \xa0類似陣列的概念，但可以混雜儲存不同型態的資料，如下所示 ○\xa0 \xa0 \xa0List： x = [ 'abcd', 786 , 2.23, 'john', 70.2] ○\xa0 \xa0 \xa0Tuple: y = ( 'abcd', 786 , 2.23, 'john', 70.2) ○\xa0 \xa0 \xa0assignment: list 使用 [], tuple 使用(), 每個元素都用”，”分開 ○\xa0 \xa0 \xa0list 的大小及元素可以改變。tuple則不行 (類似常數陣列) ○\xa0 \xa0 \xa0sub-list 或是 sub-tuple語法類似取出字串局部： \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 x[0:2] \uf0e0 ['abcd', 786 ] \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 y[2:4] \uf0e0 (786, 2.23 ) \n Convert data type \n 有時候需要不同型態的資料轉換，例如將字串”10”轉成整數10 下列為常用的built-in function ● int (x) ● float (x) ● str (x) \n Arithmetic Operators \n ● 加法 + ○\xa0 \xa0 \xa0string 相加：形成新的字串\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ● 次方 ** ■\xa0 \xa0 \xa0 \xa0 \xa0x = “Hello”, y = “World”\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ● 取餘數 % ■\xa0 \xa0 \xa0 \xa0 \xa0c = x + y → c = “HelloWorld”\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ● 整除至最近整數 // ● 減法 -\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ○相除後取最接近的整數(整實數)， ● 乘法 *\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 結果的類型取決於兩個變數的類型： ○\xa0 \xa0 \xa0string 乘一個數字(int)：字串重複幾次\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa09//2 = 4 ■\xa0 \xa0 \xa0 \xa0 \xa0x = “Yo!”\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 9.0//2.0 = 4.0 ■\xa0 \xa0 \xa0 \xa0 \xa0y = x * 3 → y = “Yo!Yo!Yo!”\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 11.0//3 = 4.0 ● 除法 / ○\xa0 \xa0 \xa0注意：兩個整數相除，結果是實數 ■\xa0 \xa0 \xa0 \xa0 \xa0x = 21, y = 10 ■\xa0 \xa0 \xa0 \xa0 \xa0c = x / y → c = 2.1 \n Arithmetic Operators \n ● 如果要進行下面的運算 a= a+b （用a+b的結果為a重新賦值） ● 在python可以改寫成： a += b ● 所以算術運算符號可以有 \xa0 \xa0 \xa0 \xa0 +=\xa0 \xa0 \xa0-=\xa0 \xa0 \xa0*=\xa0 \xa0 \xa0/=\xa0 \xa0 \xa0%=\xa0 \xa0 \xa0**=\xa0 \xa0 \xa0//= \n Modules or package （也稱為library） \n ● ”modules” or “packages”：通常是其他人寫好的函數或指令，打包成一個「工具庫」 \xa0方便分享使用。（非python內建，可能會需要下載安裝） ○\xa0 \xa0 \xa0本課程會用到的library: numpy (array), matplotlib (基本繪圖), basemap (地圖), \xa0 \xa0 \xa0 \xa0 \xa0netCDF (讀nc檔) ● 使用方式：import module_name ○\xa0 \xa0 \xa0在執行工具庫內的指令之前，就要先把modules 引進來（不然python不會認得 \xa0 \xa0 \xa0 \xa0 非內建的指令） ○\xa0 \xa0 \xa0使用工具庫內的指令：module_name.function (or module_name.constant) ○\xa0 \xa0 \xa0可以使用import module_name as xxx (xxx是你自己取的縮寫） \xa0 \xa0 \xa0 \xa0 使用指令的語法就簡化成xxx.function，例如: \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0import math as m \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0x=m.cos(m.pi) \n", 'tags': '', 'url': 'python基本語法.html'}, {'title': 'vi 與 vim 的指令整理', 'text': '編輯模式 \n \n \n \n 指令 \n 說明 \n \n \n i \n 在游標位置進入編輯模式 \n \n \n I \n 在游標行的第一個非空白字元進入編輯模式 \n \n \n a \n 在游標位置後進入編輯模式 \n \n \n A \n 在游標行的最後一個字元進入編輯模式 \n \n \n o \n 向下新增一行，並進入編輯模式 \n \n \n O \n 向上新增一行，並進入編輯模式 \n \n \n cc \n 刪除游標行，並進入編輯模式 \n \n \n h 或 向左方向鍵 \n 游標向左移動一個字元 \n \n \n j 或 向下方向鍵 \n 游標向下移動一個字元 \n \n \n k 或 向上方向鍵 \n 游標向上移動一個字元 \n \n \n l 或 向右方向鍵 \n 游標向右移動一個字元 \n \n \n [ESC] \n 取消指令或退出編輯模式 \n \n \n \n 刪除 \n \n \n \n 指令 \n 說明 \n \n \n dd \n 刪除游標行 \n \n \n 行數 \xa0 → dd \n 刪除 n 行 \n \n \n dG \n 刪除游標行到最後一行 \n \n \n d1G \n 刪除游標行到第一行 \n \n \n d$ \n 刪除游標處到最後一個字元 \n \n \n d0 \n 刪除游標處到第一個字元 \n \n \n \n 檔案功能 \n \n \n \n 指令 \n 說明 \n \n \n :w \n 存檔 (加 ! 表示強制存檔) \n \n \n :w \xa0 檔案名稱 \n 另存新檔 \n \n \n :q \n 退出 vi (加 ! 表示不存檔強制退出) \n \n \n :wq \n 存檔並退出 vi \n \n \n : x \n 存檔並退出 vi \n \n \n :e \xa0 檔案名稱 \n 編輯其它檔案 \n \n \n :e! \n 還原至檔案編修前的狀態 \n \n \n :r \xa0 檔案名稱 \n 讀入檔案內容，並加到游標行的後面 \n \n \n :n \n 切換到下一個開啟的檔案 \n \n \n :N \n 切換到上一個開啟的檔案 \n \n \n :set nu \n 顯示行號 \n \n \n :set nonu \n 取消行號顯示 \n \n \n :files \n 列出所有開啟的檔案 \n \n \n :Ex \n 開啟檔案瀏覽器 \n \n \n :Ex \xa0 路徑 \n 於指定路徑開啟檔案瀏覽器 \n \n \n \n', 'tags': '', 'url': 'vi 與 vim 的指令整理.html'}, {'title': 'Dos 基本指令', 'text': '1. cd (Change Directory): 移動到某個資料夾 2. cd..:回上一層 3. cd\\(斜線代表「根目錄(root)):回 c 槽 4. cd 資料夾名稱:切換至某個資料夾 5. 切換到其他硬碟 d: 6. dir : 顯示資料夾底下的內容 7. dir/w: 橫向排列 8. dir/p: 分頁 9. nslookup 域名: 域名(Nomain name)查 IP 10. copy con: 建立檔案 copy con test.bat (enter) (檔案要副檔名) → this is line one (enter) (輸入內容) → this is line two (結束時 ctrl + z) (enter) 11. del 檔案名稱: 刪除檔案 12. md (Make Directery) 目錄名稱:建立目錄 13. rd 目錄名稱: 刪除一個空目錄 /s:刪除目錄下的所有子目錄和檔案 /q 取消系統詢問刪除與否的確認訊息 14. copy 原檔名 新檔名: 複製檔案 15. xcopy 原目錄名 新目錄名: 複製目錄 /D:只複製比目的檔還新的檔案 /s: 複製所有子目錄和檔案除空目錄外 16. type: 顯示檔案內容 17. ren 原檔名 新檔名:更改檔名 18. help: 顯示目前版本 DOS 的幫助資訊 19. move: 移動檔案，或重新命名一個檔案或目錄 移動檔案: move 檔案名稱 目錄名稱 重新命名檔案: move 原檔名 新檔名 重新命名目錄: move 原目錄名 新目錄名 20. 呼叫程式 exployer 檔案總管 taskmgr 工作管理員 logoff 登出 devmgmt.msc 裝置管理員 calc 計算機 control 控制台 notepad 記事本 wordpad write mspaint 小畫家 charmap 字元對應表 magnify 放大鏡 clean mgr 磁碟清理 osk 螢幕小鍵盤 msinfo32 系統資訊 compmgmt.msc 電腦管理 msconfig 系統設定公用程式 \n', 'tags': '', 'url': 'Dos 基本指令.html'}, {'title': 'SolveSpace的快捷鍵', 'text': '\n \n \n 1.文件菜單 \n \n \n Ctrl \xa0 + \xa0 N \n 新建 \n \n \n Ctrl \xa0 + \xa0 O \n 打開 \n \n \n Ctrl \xa0 + \xa0 S \n 儲存 \n \n \n \n \n \n \n \n 2.編輯菜單 \n \n \n Ctrl \xa0 + \xa0 Z \n 撤消 \n \n \n Ctrl \xa0 + \xa0 Y \n 重做 \n \n \n Space \n 全部重新生成 \n \n \n . \n 將選擇對齊到網格 \n \n \n 9 \n 旋轉導入90° \n \n \n Ctrl \xa0 + \xa0 X \n 剪下 \n \n \n Ctrl \xa0 + \xa0 C \n 複製 \n \n \n Ctrl \xa0 + \xa0 V \n 貼上 \n \n \n Ctrl \xa0 + \xa0 T \n 粘貼變形 \n \n \n Del \n 刪除 \n \n \n Ctrl \xa0 + \xa0 E \n 選擇邊緣鏈 \n \n \n Ctrl \xa0 + \xa0 A \n 全選 \n \n \n Esc \n 全部取消選擇 \n \n \n \n \n \n \n \n 3.查看菜單 \n \n \n + \n 放大 \n \n \n -- \n 縮小 \n \n \n F \n 縮放至 適合 \n \n \n W \n 將視圖與工作平面對齊 \n \n \n F2 \n 最近的正交視圖 \n \n \n F3 \n 最近的等軸測圖 \n \n \n F4 \n 視點中心 \n \n \n > \n 顯示捕捉網格 \n \n \n ` \n 使用透視投影 \n \n \n Tad \n 顯示文字視窗 \n \n \n \n \n \n \n \n 5.素描 \n \n \n 2 \n 在工作平面 \n \n \n 3 \n 3D的任何地方 \n \n \n P \n 基準點 \n \n \n S \n 線段 \n \n \n R \n 矩形 \n \n \n C \n 圓 \n \n \n A \n 圓弧 \n \n \n B \n 三次曲線樣條 \n \n \n T \n 真型字體文本 \n \n \n G \n 切換構造 \n \n \n Shift \xa0 + \xa0 A \n 點切線弧 \n \n \n I \n 在相交處分割曲線 \n \n \n \n \n \n \n \n 6.約束 \n \n \n D \n 距離/直徑 \n \n \n N \n 角度 \n \n \n U \n 其他輔助角 \n \n \n E \n 切換參考昏暗 \n \n \n H \n 設定水平 \n \n \n V \n 設定垂直 \n \n \n O \n 在點/曲線/平面上 \n \n \n Q \n 等長/半徑/角度 \n \n \n Z \n 長度比 \n \n \n M \n 在中點 \n \n \n Y \n 對稱的 \n \n \n L \n 平行/切線 \n \n \n X \n 相同方向 \n \n \n ] \n 拖延的鎖定點 \n \n \n ; \n 註解 \n \n \n \n \n \n \n \n 4.形成 \n \n \n Shift \xa0 + \xa0 3 \n 3D素描 \n \n \n Shift \xa0 + \xa0 W \n 在新工作平面中素描 \n \n \n Shift \xa0 + \xa0 T \n 逐步 放置 \n \n \n Shift \xa0 + \xa0 R \n 步進旋轉 \n \n \n Shift \xa0 + \xa0 X \n 拉伸 \n \n \n Shift \xa0 + \xa0 L \n 旋轉拉伸 \n \n \n Shift \xa0 + \xa0 I \n 導入/組裝 \n \n \n \n', 'tags': '', 'url': 'SolveSpace的快捷鍵.html'}, {'title': 'Nx12快捷鍵', 'text': '一、【文件】菜單快捷鍵 \n 1、新建 Ctrl+N \n 2、打開 Ctrl+O \n 3、保存 Ctrl+S \n 4、另存為 Ctrl+shift+A \n 5、繪圖 Ctrl+P \n 6、執行→Grip Ctrl+G \n 7、執行→Grip調試 Ctrl+shift+G \n 8、執行→NX OpenCtrl+U \n 二、【編輯】菜單快捷鍵 \n 1、撤銷列表（取消當前操作、 Ctrl+Z \n 2、剪切 Ctrl+X \n 3、複製 Ctrl+C \n 4、粘貼 Ctrl+V \n 5、刪除 Ctrl+D \n 6、變換 Ctrl+T \n 7、對象顯示 Ctrl+J \n 8、移動對象 Ctrl+Shift+M \n 9、顯示和隱藏→顯示和隱藏 Ctrl+W \n 10、顯示和隱藏→隱藏 Ctrl+ B \n 11、顯示和隱藏→顛倒顯示和隱藏 Ctrl+ shift+B \n 12、顯示和隱藏→立即隱藏 Ctrl+ shift+I \n 13、顯示和隱藏→顯示 Ctrl+ shift+K \n 14、顯示和隱藏→全部顯示 Ctrl+ shift+U \n 三、【視圖】菜單快捷鍵 \n 1、刷新 F5 \n 2、操作→適合窗口 Ctrl+F \n 3、操作→縮放 Ctrl+Shift+Z或F6 \n 4、操作→旋轉 Ctrl+R或F7 \n 5、操作→編輯工作截面 Ctrl+H \n 6、可視化→高質量圖像 Ctrl+Shift+H \n 7、信息窗口 F4 \n 8、當前對話框 F3 \n 9、佈局→新建 Ctrl+Shift+N \n 10、佈局→打開 Ctrl+Shift+O \n 11、佈局→適合所有試圖 Ctrl+Shift+F \n 12、全屏 Alt+Enter \n 四、【格式】菜單快捷鍵 \n 1、圖層 Ctrl+L \n 2、在視圖中可見 Ctrl+Shift+V \n 五、【工具】菜單快捷鍵 \n 1、表達式 Ctrl+Shift+E \n 2、宏→開始錄製 Ctrl+Shift+R \n 3、宏→回放 Ctrl+Shift+P \n 4、宏→步進 Ctrl+Shift+S \n 六、【開始】菜單快捷鍵 \n 1、建模 Ctrl+M或M \n 2、NX鈑金 Ctrl+Alt+N \n 3、外觀造型設計 Ctrl+Alt+S \n 4、製圖 Ctrl+Alt+D \n 七、【首選項】菜單快捷鍵 \n 1、對象 Ctrl+Shift+J \n 2、選擇 Ctrl+Shift+T', 'tags': '', 'url': 'Nx12快捷鍵.html'}, {'title': 'Video device', 'text': '我是使用ShareX 如圖(一) 來進行拍攝影片的如圖(一)，拍攝完成後再使用aegisub 如圖(二)來進行字幕的撰寫，最後再將字幕與影片融合，用arctime如圖(三)來進行融合與匯出影片的。 \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 圖(一) \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 圖(二) \n \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 圖(三) \n', 'tags': '', 'url': 'Video device.html'}, {'title': 'Q&A', 'text': '網頁無法顯示Brython，Spur Gear 導入錯誤，案F12來開啟Console檢查錯誤。 \n 問題(一)如下圖 \n \n 解決方法: \n 開啟本倉儲資料夾，打開flaskapp.py，案ctrl+f來找到 page_content = request.form[\'page_content\']，有2個地方都在底下加入 \n page_content = page_content.replace(\'// \xa0 <![CDATA[\', \'\') \n page_content = page_content.replace(\'// ]]> \', \'\') \n \n save後即可解決問題。 \n \n ==================================================================== \n 問題(二)如下圖 \n \n \n 解決方法: \n \n 檢查本倉儲資料夾static底下是否有brython.js與 brython_stdlib.js，沒有的話就必須加入這2個js檔案，有的話就是導入指令錯誤如: \n \n \n <!-- 導入 Brython 標準程式庫 --> \n < script \xa0 src = "./../cmsimde/static/brython.js" ></ script > \n < script \xa0 src = "./../cmsimde/static/brython_stdlib.js" ></ script > \n \n 必須改為: \n \n \n <!-- 導入 Brython 標準程式庫 --> \n < script \xa0 src = "/static/brython.js" ></ script > \n < script \xa0 src = "/static/brython_stdlib.js" ></ script > \n \n \n 即可解決顯示問題。 \n \n \n \n \n 問題(三)如下圖:\xa0 \n \n python wsgi.py 無法執行的話 \n \n \n 將start_mdecourse用編輯器打開 \n \n path= %path%; %Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%; \n 改成 \n path=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;%path%; \n 如下圖就可以解決。 \n \n \n \n \n \n 問題(四)如下圖: \n \n 出現了亂碼的話，開啟Options。 \n \n \n \n 把cp950改成utf-8如下圖，就可以解決。 \n \n', 'tags': '', 'url': 'Q&A.html'}, {'title': 'About', 'text': '個人倉儲網址: https://github.com/s40723210/cad2019 \n 個人blogger: https://40723210.blogspot.com/ \n 個人youtube: https://www.youtube.com/channel/UC8l7lxn3l0ENuxYDhLjgxRw \n *我有導入無法將文字選取起來的javascript，並不是bug。 \n \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};