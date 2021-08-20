# appengine-google-appscript
A production ready App-Engine template ⚙️ for Google AppScript WebApp development. 

The repository consists of different modules used to simplify the server side management and to help productionasing the development of WebApp based on Google AppScript and Google Workspace/Drive environment. 

The base assumption is that server side Database consist of Google Spreadsheets. The engine is built to easily find and interact with spreadsheets stored on Drive folders. With some manipulation (work-in-progress) the engine can be extended to interact with other type of Database formats, in particular:
- JSON file formats (easy).
- Cloud SQL Databases, using the function ```JDBConnect()``` (more work required to have it working).

## Modules

### Config.gs
This module is used to return the information regarding a particular file/spreadsheet. The function ```getConfiguration(configkey)``` returns a particular configuration object that stores the relevant information.

### Utils.gs
Utilities functions used to find and retrieve different objects:
- Folders by Path
- File in Folders
- Database Spreadsheets
- Database Worksheets
- Database Worksheet columns

Importand functions are:
```getFolderbyPath(folderpath)```

find folders in drive from the "/" notation. ```folderpath``` is a folder path in the form ```parent/children/children``` 
