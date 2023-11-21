(local marks (require :harpoon.mark))
(local ui (require :harpoon.ui))

(local wk (require :which-key))
(local reg wk.register)

(reg {
      :<leader>m {
                   :name :+harpoon
                   :a [#(marks.add_file) "Add file"]
                   :m [#(ui.toggle_quick_menu) "Toggle quick menu"]
                   :1 [#(ui.nav_file 1) "Goto file 1"]
                   :2 [#(ui.nav_file 2) "Goto file 2"]
                   :3 [#(ui.nav_file 3) "Goto file 3"]
                   :4 [#(ui.nav_file 4) "Goto file 4"]
                   :5 [#(ui.nav_file 5) "Goto file 5"]
                   :f ["<cmd>Telescope harpoon marks<cr>" "Harpoon marks"]}})
                    