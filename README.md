# What I use and why I use them

### In the requirement, it says react and redux is a must. I used react but I do not use redux because I just want to show how to achieve a false **two-way data flow** in React.

### The main challenge is film lists which need call several apis. I just use fetch api and Promise.allsettled, a cool new feature in ES2020. I know the best way is not these selections but for this small task, they are more suitable.

### Last but not the least, for this task, a more engineering way to do it is to use React, @reduxjs/toolkit, redux-saga, webpack, env, typescript, eslint.

Let me explain, **redux toolkit** just helps get rid of the old redux's HOC connect function. **Redux-saga** can help do lots of dirty work in those async calls, for this particular challenge, you can use redux-saga's all api to do so, but it will be a little tricky because redux-saga's 'all' is kind of like Promise.all, if my interviewer is interested, please arrange an interview and I will talk about a smart solution.
