# Instructions

## package.json

Change project name and description to match your project.

Change folder name (`-e project-name`) of `deploy` script in `package.json`

## VS Code settings

1. Ctrl + Shift + P; select `Preferences: Open User Settings (JSON)`
2. Add:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "eslint.experimental.useFlatConfig": true
}
```

## README.md

Replace contents of this file with relevant information about your project.
