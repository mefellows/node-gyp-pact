{
  "targets": [
    {
      "target_name": "module",
      "sources": [ "./src/module.c" ],
      "include_dirs": ["<(module_root_dir)/lib"],
      "libraries": ["-lpact_ffi"],
      "library_dirs": [ "<(module_root_dir)/lib"],
    }
  ]
}