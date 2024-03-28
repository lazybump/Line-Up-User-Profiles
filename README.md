# Line-up User Profiles

This project displays several users on a page, and allows you to select a user to see further details. You can also use the URL to traverse users

## Pre-requisites

- Node.js
- npm

## Getting started

1. Clone this project

```
git clone [repo path]
```

2. Install dependencies

```
npm install
```

3. Run the app

```
npm run dev
```

## Tools

This project was scaffolded with Vite and uses the following tools:

- React
- TypeScript
- Styled Components

## Considerations

**Decisions made:**

I chose to use Styled Components as it's more in line with the company tech stack, and so I could get some practice in it.

I contemplated displaying the users in a grid layout but decided against it as the typical flow of a user experience is to scroll down until you get to the pagination buttons. If it was 20 users per page, for instance, I would've gone with a grid layout most likely.

**Challenges Faced:**

I found it straightforward to manipulate the URL to allow the visitor to traverse between user profiles, in addition to clicking on them. However, I found it challenging to do the same with the page numbers. Currently, you can only traverse the pages using the buttons. I imagine I would need to utilise the useNavigate hook from React Router, and possible useLocation. I attempted it but it didn't work out in the end
