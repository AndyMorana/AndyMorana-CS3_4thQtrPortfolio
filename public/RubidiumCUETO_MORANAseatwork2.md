# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

- ANSWER TO THE GUIDED QUESTION: When the sidebar’s positioning is changed to relative, the distance between it and the top/left/right/bottom of the page becomes equal to the number of pixels you apply to the specified cardinal direction.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

- ANSWER TO THE GUIDED QUESTION: Unlike relative positioning, fixed positioning makes it so that the footer follows the screen when you scroll up or down the page. This is because the entire point of fixed positioning is that it stays in its fixed position no matter where you are on the page, contrasting with the less dependent relative positioning.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

- ANSWER TO THE GUIDED QUESTION: Absolute positioning changes the distance of the main content from the center of the entire page by the same amount of pixels you apply in each cardinal direction (top/right/left/bottom). As opposed to fixed, which is dependent on the user's actual screen, setting it to absolute position keeps it in its place relative to the center of the page and does not rely on the user's screen.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

- ANSWER TO THE GUIDED QUESTION: The notice appears above the main content, because it has a greater z-index, which means it becomes the upper layer that overlaps the main content. If you were to swap the z-index values, the main content is the one that overlaps the notice due to the higher z-index.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    * What do you observe on about the effect of z-index on .notice and .content boxes?

- ANSWERS TO THE CHALLENGE QUESTIONS:
    * You would have to alter the pixel values assigned to the "top" and "right" attributes of the notice, in order for it to be positioned at the exact right corner of the main content box ("top" now has the value 66 px instead of 60 px and "right" now has the value 430 px instead of 400 px) 
    * Relative positioning moves the main content downwards, since it is no longer based on the distance from the center, but rather, the distance from the actual page's corners. On the other hand, fixed positioning, while at first glance, seems to have no change from absolute positioning, the main content box now actually follows the user's screen upon scrolling up or down unlike before.
    * Whichever one is assigned the greater z-index value, that specific one is prioritized over the other in terms of the page's layers, basically overlapping the one that has a lower z-index value.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    b. How does absolute positioning depend on its parent element?

    c. How do you differentiate sticky from fixed (you can research on sticky)?

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

- ANSWERS TO THE REFLECTION QUESTIONS:
    * a. Static - It is relative to nothing, as it is the base position of a CSS selector.
    * a. Relative - It moves from its static position away from the cardinal directions, the distance being equal to the amount of pixels applied.
    * a. Absolute - It moves from the center of the whole page towards the cardinal directions, the distance being equal to the amount of pixels applied.
    * a. Fixed - It tracks the user’s screen, making it always end up in the same set position, no matter where the user scrolls.
    * b. The parent element of a CSS selector with absolute positioning essentially acts as a reference point, as it defines the position of the center, which is the basis for absolute positioning. This means that if the parent element were to be altered in a way where the center is placed in a different area on the page, the absolute positioning would move the CSS selector acccordingly, so that it remains the same distance from the new center. 
    * c. Sticky is simply the combination of fixed and relative, it stays in its set position relative to the cardinal directions until the user scrolls past a certain point, making it then stick to a position on the user’s screen.
    * d. I would apply fixed positioning on very important details such as the website navigation bar, available email addresses that should be contacted and any other highly necessary links. Images and diagrams will use sticky positioning, while relative positioning would be just fine for most of the other content in the website, though the main information of the page would have absolute positioning applied in order to give them more prominence. Finally, using z-index values, I will layer the content effectively so that important information for the same purpose as the use of absolute positioning (further emphasis on important details).
