# devonhirth.com

Personal website.

## Start

```shell
$ . project
```

Load project command aliases.

### Commands

Command    | Description
-----------|-
`start`    | Start [Lume](https://lumeland.github.io/) server.
`tailwind` | Compile [Tailwindcss](https://tailwindcss.com/) utilities.
`imgs`     | Copy images from **./src** to **./dist**.
`cname`    | Copy CNAME from **./src** to **./dist**.
`static`   | Build the static site.
`build`    | Run `static`, `tailwind`, `imgs`, and `cname`.
`publish`  | Publish to GitHub pages branch.