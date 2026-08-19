発注管理アプリ v1
=================

【入っているファイル】
index.html
manifest.webmanifest
sw.js
supabase-v1.sql

【主な機能】
・発注先マスター
・商品マスター（発注先ごとに別商品）
・発注先を選ぶと、その会社の商品だけ一覧表示
・数量だけ入力して発注確定
・発注履歴保存
・発注履歴の詳細確認
・履歴から複製して再発注
・共通様式の発注書を印刷/PDF保存
・iPhone / Windows 対応
・Supabase Auth + RLSでユーザーごとのデータ保護
・PWA対応

【初回設定】
1. Supabaseで新しいProjectを作成
2. SQL Editorで supabase-v1.sql を全文実行
3. Authentication > Users でログイン用ユーザーを作成
4. GitHub Pagesへ index.html / manifest.webmanifest / sw.js をアップロード
5. 公開URLを開く
6. Supabase Project URL と Anon Key を入力
7. 作成したメールアドレス・パスワードでログイン

【重要】
現在のv1は、ログインしたユーザー本人のデータだけ見える設計です。
複数人で同じ会社データを共有する「会社アカウント・権限管理」はv2で追加できます。

【PDF/FAX】
発注詳細の「PDF・印刷」からiPhone/Windowsの印刷機能を開き、PDF保存またはFAX環境へ渡せます。
発注元（自社情報）を帳票へ自動表示する会社マスターはv2で追加予定です。
