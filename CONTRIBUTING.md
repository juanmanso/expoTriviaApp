# Contributing

When contributing to this repository, please follow the guidelines below.
They are based on [airbnb's javascript style guide](https://github.com/airbnb/javascript#table-of-contents)

<br>

## Table of Contents

- [Contributing](#contributing)
  - [Table of Contents](#table-of-contents)
  - [General](#general)
    - [Folder and File Names](#folder-and-file-names)
      - [Folder Names](#folder-names)
      - [File Names](#file-names)
    - [Objects and Functions](#objects-and-functions)
    - [Documents](#documents)
    - [Spikes](#spikes)
  - [Version Control](#version-control)
    - [Branch Names](#branch-names)
    - [Branches Lifetime](#branches-lifetime)
    - [Integration](#integration)
    - [Commits](#commits)
    - [Commit Messages](#commit-messages)
    - [Pull Requests](#pull-requests)
      - [Title](#title)
      - [Description](#description)

<br>
<br>

## General

### Folder and File Names

As a general rule, [camel case](https://en.wikipedia.org/wiki/Camel_case)
must be used for files and folders

#### Folder Names

Folder names must comply with the following rules:

- **Alphanumeric**
- **Lowercase**
- **Uppercase instead of spaces (" ")**

Incorrect examples:

- "API"
- "this is a folder"

Correct examples:

- "api"
- "thisIsAFolder"

#### File Names

File names must comply with the following rules:

- **Alphanumeric**
- **Lowercase**
- **Uppercase instead of spaces (" ")**

Incorrect examples:

- "This Is A File"
- "another file"

Correct examples:

- "thisIsAFile"
- "anotherFile"

<br>

### Objects and Functions

Objects should follow [pascal case](https://techterms.com/definition/pascalcase)
convention, whereas functions should use [camel case](https://en.wikipedia.org/wiki/Camel_case)

Correct examples of objects:

- "ThisIsAnObject"
- "AnotherObject"

Correct examples of functions:

- "thisIsAFunction"
- "anotherFunction"

<br>

### Documents

Every document added to the repository must be placed inside the `/docs`
folder in Markdown (`.md`) format. The purpose of using Markdown format is to
keep track of documentation changes easily. Document images must be placed
inside the `/docs/images` with the name containing the document name as
prefix (e.g. if the image name is "database-diagram" and the document name is
"general-architecture" then the correct image name would be
"general-architecture-database-diagram").

<br>

### Spikes

Spikes must be placed inside the `/spikes` folder. Every spike must have its
own folder with a **README.md** file composed of the following sections:

- **Overview:** Purpose of the spike.
- **{Tool/Library/Framework}:** Replace this title by the name of the tool/library/framework being tested and complete with information and links.
- **Running the spike**
  - **Prerequisites:** List of necessary tools to run the spike.
  - **Steps:** Step-by-step guide on how to run the spike.
- **Conclusion:** Conclusion on whether its convenient to implement the tool within the system or not.

<br>
<br>

## Version Control

### Branch Names

The branch name must have the following structure:

`{TYPE}/{USER-STORY-ID}-{DESCRIPTION}`

The **TYPE** can be one of:

- **build** "Build system", new build of the system
- **chore** "Chore", update of grunt tasks, etc.; no prod code changes
- **devops** "DevOps", changes to devops related tasks
- **docs** "Documentation", changes to documentation
- **feat** "Features", new features
- **fix** "Bug fixes", new bug fixes
- **perf** "Performance", changes to improve performance
- **refactor** "Refactor", refactor of production code
- **style** "Style", formatting, etc.; no prod code changes
- **spike** "Spike", code for analysis risks or sandbox implementations
- **test** "Testing", add missing tests or refactor; no prod code changes

The **DESCRIPTION** must comply with the following rules:

- **Alphabetic**
- **Lowercase**
- **Hyphen ("-") instead of spaces (" ")**
- **No more than 30 characters long**

Examples:

- `docs/123-contributing-guidelines`
- `feat/456-post-users-endpoint`

<br>

### Branches Lifetime

Every branch that has already been integrated into the main branch, must be
deleted both locally and remotely, to avoid branch cluttering.

<br>

### Integration

When integrating changes from one branch into another, always use **rebase**
instead of **merge**. The purpose is to keep a linear (and clearer) commit
history.

<br>

### Commits

Commits should be small and atomic. For more information about commits best
practices, please head to [this page](https://deepsource.io/blog/git-best-practices/).

<br>

### Commit Messages

Commit messages must comply with the following rules:

1. Message length must have no more than 100 characters
2. Commit title must be lowercase
3. Commit title must not end with a period
4. Commit title must have the following structure: **type: [optional-scope] description**

**Scope**

The scope identifies the EPIC user story to which the change introduced in
the commit is associated. In short, the overall topic of the feature it is
modifying.

This element is optional in the commit title, but recommended.

**Type**

The type identifies the type of change introduced in the commit, and it can
be any of the ones specified for branches

**Examples**

Below you can find some examples of correct commit messages:

```shell
git commit -m "docs: [contribute] add contributing guidelines document"
```

```shell
git commit -m "fix: [endpoints] validation issue on users endpoint"
```

```shell
git commit -m "style: [login] update login view to apply styling"
```

<br>

### Pull Requests

#### Title

Since the merge strategy for PRs is set to `Squash and merge`,
PR's title should follow [commit guidelines](#commit-messages).

More importantly, being the title the actual commit message when
merged, it should correctly describe the nature of the change
and what it brings to that target branch.

When starting the merge, GitHub will automatically put PR's title
as the title of the commit merged and the whole commit history
of the PR will be squashed into the body of the merged commit.
If you were interested in customizing the body of the merged commit,
you are free to do so. The most important thing is to keep
commit title messages consistent.

#### Description

The pull request description must follow the structure defined in their corresponding template:

- [Feature](/.github/PULL_REQUEST_TEMPLATE.md)
- [Documentation](/.github/ISSUE_TEMPLATES/documentation-template.md)
- [Bug](/.github/ISSUE_TEMPLATES/bug-template.md)
