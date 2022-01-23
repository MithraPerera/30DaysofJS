# Demo

# Lessons Learned

**HTML**

- _kbd_ is for textual user input from a keyboard, voice input or any other text entry device.

- _audio_ includes a src with the path to the audio file or in our case the wav file

- _data-\*_ attribute allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM.

**CSS**

- adding a transition property gives a nice transition to any changes added to an element when adding another class to it

**JavaScript and Other**

- Each key on the keyboard has a specific keycode that represents it

- we can add an event listener to the _window_ so that any key that is pressed while on the page will activate the event listener

- having a transition timeout in css and timer timeout in your javascript can cause things to get out of sync. Better to have a transition end event that runs when the transition ends

- when you have a _node list_ of elements, you cannot listen on all of them without looping through them all and adding an eventlistener for _"transitionend"_
