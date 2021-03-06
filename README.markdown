## ABOUT LESSMESS

Lessmess is a light-weight approach to task management. Lessmess
provides an interactive view of text-based task lists. You will still
need to edit your tasks as text in your favourite text editor, but you
will get a better overview of the status of individual tasks. In a nutshell, you
write [this](example.txt) to generate [this](example.html).

You write your task lists using
[Markdown](http://daringfireball.net/projects/markdown/syntax) syntax,
with a few additional rules to define individual tasks. As the task
list is converted to HTML, Javascript functionality is inserted and
enhances the HTML with interactive functionality. Lessmess is designed
to work with the HTML that is created by Pandoc, which an excellent Markdown
parser. Since the Javascript manipulations performed on the generated
HTML is tuned to the markup Pandoc generates, it is not likely that 
Lessmess will work well with other Markdown parsers. 

## Terminology

Project
:	A project is defined as a section of text following a header. 

Task
:	A task is one or several lines starting with [ ], with an optional status symbol between the brackets.

Context
:	A tag, starting with the at-sign. Is used to group related tasks together, even if included in different projects. 

## Features

* Generates color coding of tasks according to status 
* Generates statistics of tasks per project 
* Allows easy navigation between projects in the same file 
* Handles several projects (task-lists) in the same text file 
* Recognises GTD contexts Uses internal data structures for tasks that are well aligned with the ical standard
* Parses date information and displays a time line of tasks
* Generates HTML that prints "one project per paper" - a linebreak before each
header section.
* Allows you to print individual projects directly. 
	
## HOW TO USE LESSMESS

Lessmess requires [Pandoc](http://johnmacfarlane.net/pandoc).

Lessmess is applied in the conversion of Markdown source to HTML,
using pandoc. Just include a header, the file "header.inc" in the
conversion step with pandoc:

	 pandoc -H header.inc -s todo.txt -o todo.html

The generated HTML file must have access to the "include" directory in its directory
when it is opened.

## HOW TO WRITE MARKDOWN FOR LESSMESS

A task in Lessmess is defined by prefixing a paragraph with brackets
with a status indicator between the brackets:

~~~ 

[ ] Not started

[+] Completed

[-] Aborted

[>] In process

[<] Halted

[!] Needs action

[?] Unknown status 

~~~

Each of these lines are valid paragraphs in Markdown, but the Lessmess
javascript will recognise them as tasks.

If you want to provide additional information for a task there is an
extended syntax which uses Markdown defintion list syntax.  Provide a
colon on the first line after the task definiton line, as follows:

~~~ 
[>] Use defintion lists for follow up text. @context 
:   By using the definition list syntax with a colon after the first line folled by tab we will be able to work this out better

:   That is pretty cool since it allows

:   * ordered lists
    * and more

:   Here is one definition.  It may contain multiple blocks.
    Here is some code:

:       {* my code *} 

:   Here is the another paragraph of this definition.
~~~

You can mark tasks with context tags using an at-sign, as is common
for many other GTD programs. Example of contexts are @email or @phone.
Tasks that are tagged with contexts can be sorted together to make it
easier for you to get an overview of them.

~~~ 
[ ] Buy milk. @shopping

[+] Call the dentist. @phone

~~~

You can mark tasks with date information. The date syntax is according
to ISO8601. The intention is for Lessmess to closely model the date
information that is available in the ical standard. However, the usage
of date information is not yet completed.

~~~ 
[ ] Project meeting. dtstart:2009-09-01

~~~
