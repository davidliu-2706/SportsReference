The code can be cloned into a root folder named "SportsReference".
# Overview
Using the json data, I re-created the required table using TypeScript, although a React solution would work as well.
As web browsers do not natively execute TypeScript, I also incorporated Vite to help my table compile in a browser tab. To run this on your local machine, run `npm install` in the root folder through the terminal to obtain all required dependencies. Then, execute `npm run dev`, and copy/paste the corresponding localhost link in a web browser to see the table.

# main.ts
The code to generate the table and its content is in the main.ts file. Here, I've divided the table into three main sections: the top header, the table body, and the bottom footer. The top header and bottom footer follow essentially the same structure, as it sets the first cell as "Tm". Then, it traverses through the data and creates a new cell for each team to ensure a dynamic and scalable solution.
The body of the table is where more sophisticated mapping and generation is executed. Here, the table is generated row by row as we traverse the data. For each team in the data, a row is generated with the following content:
1. **First cell**
   - Always the team name
2. **Matrix cells**
   - For each team in the data, the corresponding matrix cell is populated using the getMatrixValue function
    1. First cell is always the team name
    2. For each team in the data, the corresponding matrix cell is populated with the getMatrixValue function
## getMatrixValue function
This function helps calculate the number of wins that the rowTeam parameter team has over the columnTeam parameter team. First, if the rowTeam and columnTeam are the same, the cell is simply populated with "--" as instructed. Otherwise, we find the total win/loss data for rowTeam and streamline it further by picking out the specific win/loss record against columnTeam. Lastly, the number of wins is returned to populate the cell with.

# style.css
As an avid Baseball Reference user, I became very familiar with the stylistic details of the table and tried my best to replicate it here. The only part that I was unable to fully replicate was the exact font, but Arial produced the closest results compared to other ones that I experimented with.
