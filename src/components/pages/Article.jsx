/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import './Article.css'

// Sample articles data with formatted content for bullet points
const articlesData = [
  {
    id: 1,
    title: "Power Platform in IT Marketing",
    author: "Sreekar",
    date: "2007-present",
    content: (
      <>
        <p>
          The Microsoft Power Platform is a suite of low-code/no-code tools designed to empower
          organizations to automate processes, analyze data, and build applications with minimal
          coding knowledge. In the context of IT marketing tools, the Power Platform offers a robust set
          of functionalities that can significantly enhance marketing strategies and operations. Here's a
          closer look at how these tools can be utilized in IT marketing:
        </p>
        
        <h4>❖ Power BI</h4>
        <ul>
          <li>Power BI is a powerful business analytics tool that enables organizations to visualize
            and share insights from their data. For IT marketing teams, this means:</li>
          <li>Data Visualization: Create interactive dashboards and reports to analyze customer
            behavior, campaign performance, and market trends.</li>
          <li>Real-Time Insights: Monitor marketing metrics in real time, allowing for quick
            adjustments to campaigns based on performance.</li>
          <li>Data Integration: Combine data from various sources (CRM, social media, website
            analytics) to get a comprehensive view of marketing efforts.</li>
        </ul>
        
        <h4>❖ Power Apps</h4>
        <ul>
          <li>Power Apps allows users to build custom applications tailored to their specific
            marketing needs without extensive coding. This can benefit IT marketing in several
            ways:</li>
          <li>Custom Solutions: Develop applications for lead management, event registrations, or
            customer feedback that fit perfectly into existing workflows.</li>
          <li>Mobile Accessibility: Create mobile-friendly apps that enable marketing teams to
            access information and manage tasks on the go.</li>
          <li>Automation of Processes: Automate repetitive tasks, such as sending follow-up
            emails or updating customer records, freeing up time for more strategic initiatives.</li>
        </ul>

        <h4>❖ Power Automate</h4>
        <ul>
          <li>Power Automate helps automate workflows between applications and services. For marketing teams, this means:</li>
          <li>Streamlined Processes: Automate tasks like posting on social media, sending
            newsletters, or updating CRM records based on specific triggers.</li>
          <li>Integration with Other Tools: Connect with various marketing tools (like Mailchimp or
            Salesforce) to streamline workflows and data exchange.</li>
          <li>Approval Workflows: Set up automated approval processes for content, budgets, or
            campaign launches, enhancing collaboration and efficiency.</li>
        </ul>

        <h4>❖ Power Pages</h4>
        <ul>
          <li>Power Pages allows for the creation of secure, low-code websites. For IT marketing, this can be particularly useful for:</li>
          <li>Landing Pages: Quickly create and launch landing pages for specific campaigns,
            products, or events without extensive web development resources.</li>
          <li>Customer Portals: Develop portals for customers to access resources, submit
            inquiries, or track orders, improving engagement and satisfaction.</li>
          <li>Integration with Other Tools: Seamlessly connect these pages with Power Apps and
            Power Automate for a holistic approach to customer interactions.</li>
        </ul>
        
        <h4>Conclusion</h4>
        <p >
          The Microsoft Power Platform offers IT marketing teams a suite of tools that can enhance their
          effectiveness, improve customer engagement, and streamline processes. By leveraging these low-code/no-code solutions,
          organizations can quickly adapt to changing market conditions, make data-driven decisions, and ultimately drive
          better marketing outcomes. As digital marketing continues to evolve, integrating these tools can provide a significant competitive edge.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Microsoft Office",
    author: "Sreekar",
    date: "2007-Present",
    content: (
      <>
        <p >
          The Microsoft Power Platform is a suite of low-code/no-code tools designed to empower
          organizations to automate processes, analyze data, and build applications with minimal
          coding knowledge. In the context of IT marketing tools, the Power Platform offers a robust set
          of functionalities that can significantly enhance marketing strategies and operations. Here's a
          closer look at how these tools can be utilized in IT marketing:
        </p>
        
        <h4>✓ Microsoft Office 365</h4>
        <ul>
          <li>Microsoft Office 365 is a comprehensive suite of cloud-based productivity tools
designed to facilitate collaboration, communication, and efficiency in both personal
and professional settings. Here’s an overview of the complete tools offered in Office
365:</li>
        </ul>
        
        <h4>✓ Microsoft Word</h4>
        <ul>
          <li>A powerful word processing application that allows users to create, edit, and format
documents. It offers a range of templates, collaboration features, and formatting
options, making it ideal for everything from simple letters to complex reports.</li>
        </ul>

        <h4>✓ Microsoft Excel</h4>
        <ul>
          <li>This spreadsheet application is essential for data analysis, calculations, and
visualization. It features powerful formulas, pivot tables, and charts, making it
suitable for financial modeling, data management, and statistical analysis.</li>
        </ul>

        <h4>✓ Microsoft PowerPoint</h4>
        <ul>
          <li>PowerPoint is a presentation software that enables users to create visually engaging
slideshows. It offers various templates, design tools, and multimedia integration,
perfect for business presentations, academic lectures, and more.</li>
        </ul>
        <h4>✓ Microsoft Outlook</h4>
        <ul>
          <li>A robust email client that also includes calendar, task management, and contact
organization features. Outlook facilitates communication and scheduling, making it
an essential tool for professionals.</li>
        </ul>
        <h4>✓ Microsoft OneNote</h4>
        <ul>
          <li>
          A digital notebook that allows users to capture and organize notes, drawings, and
other information. It’s particularly useful for brainstorming, project planning, and
collaborative note-taking.
          </li>
        </ul>
        <h4>
        ✓ Microsoft Teams
        </h4>
        <ul>
          <li>
          A collaboration platform that combines chat, video conferencing, and file sharing.
Teams is designed for remote work, enabling seamless communication among team
members and integration with other Office 365 apps.
          </li>
        </ul>
        <h4>
        ✓ Microsoft SharePoint
        </h4>
        <ul>
          <li>
          A web-based platform for document management and storage. SharePoint allows
organizations to create intranets, manage projects, and collaborate on documents in
a secure environment.
          </li>
        </ul>
        <h4>
        ✓ Microsoft OneDrive
        </h4>
        <ul>
          <li>
          A cloud storage solution that enables users to store and share files securely. OneDrive
integrates with other Office 365 apps, allowing for easy access and collaboration on
documents from anywhere.
          </li>
        </ul>
        <h4>
        ✓ Microsoft Planner
        </h4>
        <ul>
          <li>
          A project management tool that helps teams organize tasks, assign responsibilities,
and track progress. Planner’s visual boards make it easy to see project statuses at a
glance.
          </li>
        </ul>
        <h4>
        ✓ Microsoft To Do
        </h4>
        <ul>
          <li>
          A task management application that helps users create and manage to-do lists. It
integrates with Outlook tasks and offers features like reminders and due dates to
enhance productivity.
          </li>
        </ul>
        <h4>
        ✓ Microsoft Access
        </h4>
        <ul>
          <li>
          A database management tool that enables users to create and manage databases.
It’s particularly useful for small to medium-sized businesses that require custom
database solutions.
          </li>
        </ul>
        <h4>
        ✓ Microsoft Publisher
        </h4>
        <ul>
          <li>
          A desktop publishing application used to create marketing materials, newsletters,
and brochures. Publisher offers layout tools and design features tailored for print
projects.
          </li>
        </ul>
        <h4>
        ✓ Microsoft Visio
        </h4>
        <ul><li>
        A diagramming tool that helps users create flowcharts, organizational charts, and
other visual representations of information. It’s commonly used in business settings
for process mapping and project planning.
          </li></ul>
          <h4>
          ✓ Microsoft Forms
          </h4>
          <ul>
            <li>
            A tool for creating surveys, quizzes, and polls. Forms is easy to use and provides realtime responses and analytics, making it great for gathering feedback and data
            collection.
            </li>
          </ul>
          <h4>
          ✓ Microsoft Stream
          </h4>
          <ul>
            <li>
            o A video-sharing platform for organizations to upload, share, and manage video
content. Stream is useful for training, presentations, and corporate communications.
            </li>
          </ul>
          <h4>
          ✓ Microsoft Power Automate
          </h4>
          <ul>
            <li>
            A tool for automating workflows and processes across different apps and services. It
helps users create automated tasks without needing extensive programming
knowledge
            </li>
          </ul>
          <h4>
          ✓ Microsoft Power BI
          </h4>
          <ul>
            <li>
            A business analytics tool that transforms data into interactive visualizations and
dashboards. It enables organizations to gain insights and make data-driven
decisions.
            </li>
          </ul>
        <h4>Conclusion</h4>
        <p >
        Microsoft Office 365 offers a diverse array of tools that enhance productivity,
collaboration, and organization. Whether you’re working individually or as part of a
team, these applications can streamline workflows and improve efficiency in any
setting. With continuous updates and improvements, Office 365 remains a leading
choice for businesses and individuals alike.
        </p>
      </>
    ),
  },
 {
    id: 3,
    title: "ASP.NET with C#: Overview",
    author: "Sreekar",
    date: "July 13, 2024",
    content: (
      <>
        <p>
          ASP.NET is a popular web framework developed by Microsoft that enables developers to build
          dynamic web applications, services, and websites. It uses the C# programming language and
          integrates seamlessly with Microsoft SQL Server as well as MySQL databases, making it versatile for
          various development needs.
        </p>
  
        <h4>Key Features of ASP.NET</h4>
        <ul>
          <li><strong>Rich Framework:</strong> ASP.NET provides a comprehensive set of libraries and tools for web development, including MVC (Model-View-Controller) architecture, Web Forms, and Razor Pages.</li>
          <li><strong>Cross-Platform:</strong> With ASP.NET Core, developers can build applications that run on Windows, macOS, and Linux.</li>
          <li><strong>Security:</strong> ASP.NET includes built-in security features, such as authentication and authorization, data protection, and cross-site scripting (XSS) prevention.</li>
          <li><strong>Performance:</strong> ASP.NET applications are optimized for performance with features like just-in-time (JIT) compilation and caching mechanisms.</li>
          <li><strong>Support for Modern Development Practices:</strong> Supports RESTful APIs, microservices, and integration with modern front-end frameworks (like React, Angular, and Vue.js).</li>
        </ul>
  
        <h4>Database Support</h4>
  
        <h5>Microsoft SQL Server</h5>
        <ul>
          <li><strong>Versions Supported:</strong></li>
          <ul>
            <li>SQL Server 2012</li>
            <li>SQL Server 2014</li>
            <li>SQL Server 2016</li>
            <li>SQL Server 2017</li>
            <li>SQL Server 2019</li>
            <li>SQL Server 2022</li>
          </ul>
          <li><strong>Features:</strong></li>
          <ul>
            <li>Entity Framework: A powerful Object-Relational Mapper (ORM) that allows developers to work with databases using C# objects.</li>
            <li>Stored Procedures: Supports the creation of stored procedures to encapsulate business logic at the database level.</li>
            <li>LINQ (Language Integrated Query): Enables developers to query databases using C# syntax, enhancing code readability and maintainability.</li>
            <li>Integration with Azure: SQL Server can be hosted in Azure for cloud-based applications, providing scalability and high availability.</li>
          </ul>
          <li><strong>Typical Use Case:</strong> SQL Server might be used for storing user data, application settings, and relational data. Using Entity Framework, developers can create models that map to SQL Server tables and perform CRUD (Create, Read, Update, Delete) operations easily.</li>
        </ul>
  
        <h5>MySQL</h5>
        <ul>
          <li><strong>Versions Supported:</strong></li>
          <ul>
            <li>MySQL 5.6</li>
            <li>MySQL 5.7</li>
            <li>MySQL 8.0</li>
          </ul>
          <li><strong>Features:</strong></li>
          <ul >
            <li>Entity Framework Core: Allows integration with MySQL databases, providing similar capabilities as with SQL Server.</li>
            <li>Cross-Platform: MySQL can be run on various operating systems, making it a popular choice for ASP.NET applications that require cross-platform support.</li>
            <li>Stored Procedures and Triggers: Supports advanced database features to manage data integrity and encapsulate business logic.</li>
          </ul>
          <li><strong>Typical Use Case:</strong> MySQL is often chosen for ASP.NET applications in open-source environments. It’s widely used in web applications that require a relational database and where licensing costs for SQL Server are a concern.</li>
        </ul>
  
        <h4>Setting Up ASP.NET with SQL Server and MySQL</h4>
        <ol>
          <li>Install Necessary Software:</li>
          <ul >
            <li>Visual Studio for ASP.NET development.</li>
            <li>SQL Server or MySQL Server installed on your machine or accessible on a network.</li>
          </ul>
          <li>Create a New ASP.NET Project:</li>
          <ul>
            <li>Use Visual Studio to create a new ASP.NET Core application.</li>
          </ul>
          <li>Install Database Providers:</li>
          <ul>
            <li>For SQL Server: Use the `Microsoft.EntityFrameworkCore.SqlServer` NuGet package.</li>
            <li>For MySQL: Use the `Pomelo.EntityFrameworkCore.MySql` NuGet package.</li>
          </ul>
          <li>Configure Database Connection:</li>
          <ul>
            <li>In the `appsettings.json` file, add connection strings for your SQL Server and MySQL databases.</li>
          </ul>
          <li>Create Data Models:</li>
          <ul>
            <li>Define your entity classes that represent the database tables.</li>
          </ul>
          <li>Set Up DbContext:</li>
          <ul>
            <li>Create a `DbContext` class that manages the database connection and interactions.</li>
          </ul>
          <li>Run Migrations:</li>
          <ul>
            <li>Use Entity Framework migrations to create/update your database schema.</li>
          </ul>
          <li>Build the Application:</li>
          <ul>
            <li>Develop your application using ASP.NET MVC or Razor Pages, leveraging your chosen database.</li>
          </ul>
        </ol>
  
        <h4>Conclusion</h4>
        <p>
          Using ASP.NET with C# offers a robust framework for developing web applications that can work with
          both Microsoft SQL Server and MySQL. By leveraging the strengths of each database system,
          developers can build scalable, secure, and efficient applications tailored to various requirements.
          Whether you opt for SQL Server’s enterprise features or MySQL’s flexibility and cost-effectiveness,
          ASP.NET provides the tools necessary to connect and manage your data seamlessly.
        </p>
      </>
    ),
  },  
  {
    id: 4,
    title: "Software Services & Hardware Installation ",
    author: "Sreekar",
    date: "October 19, 2024",
    content: (
      <>
        <h4>IT Software Services</h4>
        <ul>
          <li>Software Installation and Configuration:</li>
          <ul>
            <li>Operating Systems: Installation and configuration of Windows, macOS, and Linux distributions, including user accounts, network setups, and system preferences.</li>
            <li>Application Software: Installation of essential apps like Microsoft Office, Adobe Creative Suite, and other industry-specific software.</li>
          </ul>
  
          <li>System Updates and Patch Management:</li>
          <ul>
            <li>Regular updates for OS and applications to ensure security and performance.</li>
          </ul>
  
          <li>Security Services:</li>
          <ul>
            <li>Antivirus/Antimalware installation and firewall configuration.</li>
          </ul>
  
          <li>Backup and Recovery Solutions:</li>
          <ul>
            <li>Cloud and local backup solutions with disaster recovery planning.</li>
          </ul>
  
          <li>Remote IT Support:</li>
          <ul>
            <li>Resolving software issues through remote desktop tools and troubleshooting software configurations.</li>
          </ul>
  
          <li>Cloud Services:</li>
          <ul>
            <li>Implementation and management of cloud-based solutions, including storage, applications, and infrastructure services (IaaS, PaaS, SaaS).</li>
          </ul>
        </ul>
  
        <h4>Hardware Services</h4>
        <ul>
          <li>Hardware Installation and Upgrades:</li>
          <ul>
            <li>Installation of desktops, laptops, servers, printers, etc. Upgrading RAM, storage, and graphics cards.</li>
          </ul>
  
          <li>Network Setup and Configuration:</li>
          <ul>
            <li>Setting up LAN, wireless networks, and VPNs, including router and switch configurations.</li>
          </ul>
  
          <li>Hardware Maintenance and Repair:</li>
          <ul>
            <li>Routine maintenance and hardware repair/replacement.</li>
          </ul>
  
          <li>Workstation Setup:</li>
          <ul>
            <li>Configuration of workstations for employees, including ergonomic setups, software installations, and network connections.</li>
          </ul>
        </ul>
  
        <h4>Operating System Installation</h4>
        <ul>
          <li>Windows, macOS, Linux, and Mobile OS installations, including disk partitioning and post-installation configurations.</li>
        </ul>
  
        <h4>Online Problem Solutions</h4>
        <ul>
          <li>Troubleshooting software conflicts and network connectivity issues.</li>
          <li>Providing user training, support, and online community solutions for technical issues.</li>
        </ul>
  
        <h4>Conclusion</h4>
        <p>
          Comprehensive IT services and hardware solutions are crucial for business productivity. From OS installation to online problem-solving, modern businesses require robust IT support to minimize downtime and maximize efficiency.
        </p>
  
        <h4>Microsoft Operating System Platforms</h4>
        <p>
          Microsoft has developed a variety of operating systems (OS) over the years, catering to different devices and user needs. Here's an overview of key OS platforms from MS-DOS to Windows 11 and Windows Server.
        </p>
  
        <h4>Microsoft Server Installations</h4>
        <ul>
          <li>Windows Server 2003 to Windows Server 2022:</li>
          <ul>
            <li>Security features, cloud integration, and virtualization advancements.</li>
          </ul>
        </ul>
  
        <h4>Conclusion on Microsoft Server Installations</h4>
        <p>
          Microsoft’s server installations provide robust solutions for various business environments, from small offices to enterprise-level data centers. By selecting the appropriate server edition and installation options, organizations can meet their operational needs effectively.
        </p>
      </>
    ),
  },  
];

const Article = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userId, setUserId] = useState(''); // Store user ID
  const host = true; // Assume host is true for deleting comments

  useEffect(() => {
    // Load comments from localStorage when the component mounts
    const savedComments = JSON.parse(localStorage.getItem('comments')) || {};
    if (selectedArticle) {
      setComments(savedComments[selectedArticle.id] || []);
    }
  }, [selectedArticle]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && userId.trim() && selectedArticle) {
      const newCommentObj = { userId, text: newComment };
      const updatedComments = [...comments, newCommentObj];
      setComments(updatedComments);
      setNewComment('');
      setUserId(''); // Clear userId input after submission

      // Save to localStorage
      const savedComments = JSON.parse(localStorage.getItem('comments')) || {};
      savedComments[selectedArticle.id] = updatedComments;
      localStorage.setItem('comments', JSON.stringify(savedComments));
    }
  };

  const handleDeleteComment = (index) => {
    if (host) {
      const updatedComments = comments.filter((_, i) => i !== index);
      setComments(updatedComments);

      // Update localStorage
      const savedComments = JSON.parse(localStorage.getItem('comments')) || {};
      savedComments[selectedArticle.id] = updatedComments;
      localStorage.setItem('comments', JSON.stringify(savedComments));
    } else {
      alert("Only the host can delete comments.");
    }
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    const savedComments = JSON.parse(localStorage.getItem('comments')) || {};
    setComments(savedComments[article.id] || []);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    setComments([]);
  };

  return (
    <div className="container">
    <div  className='articleContainer'>
      {/* If no article is selected, show the article list */}
      {!selectedArticle && (
        <>
          <h1 className='sectionname'>Articles</h1>
          <div className='articleCard'>
            {articlesData.map((article) => (
              <div key={article.id}>
                <div className='innerdiv' onClick={() => handleArticleClick(article)}>
                  <div className="title">
                  {article.title}
                  </div>
                  <div className="author">
                  by {article.author} <br />
                  {article.date}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* If an article is selected, show its details */}
      {selectedArticle && (
        <div className='display'>
          <h1 className='displaytitle'>{selectedArticle.title}</h1>
          <p className='displayAuthor'>
            <strong>Author:</strong> {selectedArticle.author}
          </p>
          <p className='displaydate'>
            <strong>Published on:</strong> {selectedArticle.date}
          </p>
          <div className='displaycontent'>
            {selectedArticle.content}
          </div>

          <button className='closed' onClick={handleCloseArticle}>Close Article</button>

          {/* Comment section */}
          <hr />
          <h2>Leave a Comment</h2>
          <form onSubmit={handleCommentSubmit}>
            <input
              type="email"
             className='usernameID'
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your email ID"
              required
            />
            <textarea
              rows="4"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here..."
              className='Comment'
              required
            />
            <button type="submit">Submit Comment</button>
          </form>

          <hr />
          <h3>Comments</h3>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
                <p>
                 {comment.userId}
                </p>
                <p>{comment.text}</p>
                {host && (
                  <button onClick={() => handleDeleteComment(index)}>Delete Comment</button>
                )}
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
      )}
    </div>
  </div>
  );
};

export default Article;