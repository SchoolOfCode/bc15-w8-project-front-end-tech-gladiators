import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS frontend CASCADE;
      DROP TABLE IF EXISTS backend CASCADE;
      DROP TABLE IF EXISTS funstuff CASCADE;
      DROP TABLE IF EXISTS uxdesign CASCADE;
      DROP TABLE IF EXISTS users CASCADE;
    `);

    // Create the frontend table
    await pool.query(`
      CREATE TABLE frontend (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL,
        imglink VARCHAR(255) NOT NULL,
        owner VARCHAR(255) NOT NULL
      );
    `);

    // Create the backend table
    await pool.query(`
      CREATE TABLE backend (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL,
        imglink VARCHAR(255) NOT NULL,
        owner VARCHAR(255) NOT NULL
      );
    `);

    // Create the funstuff table
    await pool.query(`
        CREATE TABLE funstuff (
          id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description VARCHAR(255) NOT NULL,
          link VARCHAR(255) NOT NULL,
          imglink VARCHAR(255) NOT NULL,
          owner VARCHAR(255) NOT NULL
        );
      `);

    // Create the uxdesign table
    await pool.query(`
    CREATE TABLE uxdesign (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      link VARCHAR(255) NOT NULL,
      imglink VARCHAR(255) NOT NULL,
      owner VARCHAR(255) NOT NULL
    );
  `);

    // Create the users table
    await pool.query(`
      CREATE TABLE users (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        imglink VARCHAR(255)
      );
    `);

    // Seed the frontend table
    await pool.query(`
      INSERT INTO frontend (title, description, link, imglink, owner)
      VALUES
        ('Learn Grid Fast', 'Learn CSS Grid - A 13 Minute Deep Dive', 'https://youtu.be/EiNiSFIPIQE?si=snHGlSNCbFH_ugdH', 'https://i.ytimg.com/vi/EiNiSFIPIQE/hqdefault.jpg', 'Martina'),
        ('Learn CSS Positioning Quickly', 'A Real World Example', 'https://youtu.be/MxEtxo_AaZ4?si=JjoJixNuSRi9WoCw', 'https://i.ytimg.com/vi/MxEtxo_AaZ4/hqdefault.jpg', 'Woody95'),
        ('Learn CSS Position In 9 Minutes', 'I love this one', 'https://youtu.be/jx5jmI0UlXU?si=hDX-wvfnsBNE6kiX', 'https://i.ytimg.com/vi/jx5jmI0UlXU/hqdefault.jpg', 'InfinityBuzz'),
        ('Great Flexbox Tutorial', 'Learn Flexbox in 15 Minutes', 'https://youtu.be/fYq5PXgSsbE?si=QncpKLnJWjkfooIj', 'https://i.ytimg.com/vi/fYq5PXgSsbE/hqdefault.jpg', 'DockOck'),
        ('My Fave Event Listener Resource', 'Learn JavaScript Event Listeners', 'https://youtu.be/XF1_MlZ5l6M?si=HzHOZBpzBs4XDesr', 'https://i.ytimg.com/vi/XF1_MlZ5l6M/sddefault.jpg', 'ChuckECheesy'),
        ('Make JS Events', 'How to make your own', 'https://youtu.be/DzZXRvk3EGg?si=o4qMo9wxiKa2klhT', 'https://i.ytimg.com/vi/XF1_MlZ5l6M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC3O0g8wK51hmlyp8dnoPEKHgVy8A', 'Col.Sanders'),
        ('Check it out... Pointer Events', 'This ones for Charlie', 'https://youtu.be/MhUCYR9Tb9c?si=7PCDEysTHWK7an_B', 'https://i.ytimg.com/vi/MhUCYR9Tb9c/hqdefault.jpg', 'MsTrunchbull'),
        ('DOM Traversal With a Cool Dude', 'Learn JavaScript DOM Traversal', 'https://youtu.be/v7rSSy8CaYE?si=1ycToe-WB5UeBhMF', 'https://i.ytimg.com/vi/v7rSSy8CaYE/sddefault.jpg', 'DennisTheMenace'),
        ('My Fave HTMl & CSS Stuff', 'Learn HTML5 and CSS3 For Beginners', 'https://youtu.be/vQWlgd7hV4A?si=S8B_1W-DEwlww5lX', 'https://i.ytimg.com/vi/FZnQAUd9TQY/sddefault.jpg', 'MrChips')
    `);

    // Seed the backend table
    await pool.query(`
        INSERT INTO backend (title, description, link, imglink, owner)
        VALUES
        ('Learn Fetch API In 6 Minutes', 'You guys will love this one', 'https://youtu.be/cuEtnrL9-H0?si=Rp-W_qbDP419SaVb', 'https://i.ytimg.com/vi/cuEtnrL9-H0/maxresdefault.jpg', 'Peaches'),
        ('JavaScript Promises', 'Learn in just 10 minutes', 'https://youtu.be/DHvZLI7Db8E?si=2AHgcipfzCzHJrK9', 'https://i.ytimg.com/vi/DHvZLI7Db8E/maxresdefault.jpg', 'LordOfTheManor'),
        ('Need to know JSON?', 'This is the one guys!', 'https://youtu.be/iiADhChRriM?si=I6jTli1nFMkoTjhX', 'https://i.ytimg.com/vi/s6OIOL9OMYA/maxresdefault.jpg', 'BigGuy_Johnny'),
        ('SQL Done Right', 'This made it so much easier for me', 'https://youtu.be/p3qvj9hO_Bo?si=tfkqcaKO6cJxMYGB', 'https://blog.logrocket.com/wp-content/uploads/2022/01/build-rest-api-node-express-mysql.png', 'GrimTales66'),
        ('Python As Fast as Possible', 'in ~75 Minutes', 'https://youtu.be/VchuKL44s6E?si=i_9AK4RVRlEii45O', 'https://i.ytimg.com/vi/VchuKL44s6E/hqdefault.jpg', 'DennisTheMenace'),
        ('JavaScript Array Methods', '8 Must Know Methods', 'https://youtu.be/R8rmfD9Y5-c?si=pdt7kCPBn_FF5E8E', 'https://miro.medium.com/v2/resize:fit:850/1*u3B4WOHzBXlVvy9pe1pdxg.jpeg', 'MsTrunchbull'),
        ('Why Is Array/Object Destructuring So Useful', '...And How To Use It', 'https://youtu.be/NIq3qLaHCIs?si=-0D2V0acPIPCVXVM', 'https://miro.medium.com/v2/resize:fit:744/1*Z7_fiwo4Bwqdjw8VsHP5pg.png', 'BigRon'),
        ('JavaScript Testing Introduction', 'Unit Tests, Integration Tests & e2e Tests', 'https://youtu.be/r9HdJ8P6GQI?si=-ZYT9Xq9gm7KUcJ1', 'https://miro.medium.com/v2/resize:fit:996/1*lqWygfNJqWQ4VCyjecQ6Eg.png', 'Woody96'),
        ('CRUD operations', 'Using LocalStorage | CRUD operations in HTML CSS JavaScript (easy way)', 'https://youtu.be/gSdFqxnWBMM?si=yS1Ell-pA_VtSsuc', 'https://i.ytimg.com/vi/La5cL2jNoVw/sddefault.jpg', 'Susan'),
        ('NEW Way To Create Variables', 'Cheesy but great', 'https://youtu.be/d6a8RymS1zI?si=-APpE3rkInIwlFXu', 'https://www.wikihow.com/images/thumb/7/7e/Declare-a-Variable-in-Javascript-Step-2.jpg/v4-460px-Declare-a-Variable-in-Javascript-Step-2.jpg.webp', 'Martina')
      `);

    // Seed the funstuff table
    await pool.query(`
    INSERT INTO funstuff (title, description, link, imglink, owner)
    VALUES
    ('MY FAVOURITE STUDY TUNES', 'Deep Focus Music To Improve Concentration - 12 Hours of Ambient Study Music to Concentrate #601', 'https://www.youtube.com/live/Djz6sfWGmgM?si=YDLvKqOksLBX_ZY5', 'https://e.snmc.io/i/300/s/fe53e7917decee9cf2b2faf195e72bc5/8431694', 'Jasim'),
    ('Welcome to CSSBattle', 'Cascading Style Sheets Battle: Where Pixels and Pizzazz Collide!', 'https://cssbattle.dev/', 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2Ff4MfHUyh.jpg', 'Jasim'),
    ('Joke of the day', 'Get your daily jokes', 'https://www.laughfactory.com/jokes', 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2FR3NsSPkh.jpg', 'Jasim'),
    ('Comedy Radio Stations from United Kingdom', 'Radio Rascals: Where Laughter Takes the Airwaves!', 'https://mytuner-radio.com/radio/country/united-kingdom/genre/comedy-stations', 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2FRCnkT2Hh.jpg', 'Jasim')
  `);

    // Seed the uxdesign table
    await pool.query(`
      INSERT INTO uxdesign (title, description, link, imglink, owner)
      VALUES
      ('Figma Stuff You Might Like', 'Figma Tutorial: A Crash Course for Beginners', 'https://www.youtube.com/watch?v=IOVFRMuPeVQ&t=4125s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dLzvu2beNQvYBAicMjphIcZaW6ZcmuKdOA&usqp=CAU', 'BigJoJo'),
      ('All About Product', 'Marty Cagan - The Nature of Product', 'https://youtu.be/T3VRz18ntjQ?si=6wyd71FPhWh1vFMq', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXosVqBmAOxUrSnvU-6x4DZniR5DPg2Py3g&usqp=CAU', 'Grimoire44'),
      ('The Figma Files', 'Introducing Figma: A Beginners Tutorial (2023 UI UX Design)', 'https://youtu.be/JGLfyTDgfDc?si=0jmMjWOTcRYMZDfx', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-p4pj3sG5jPDPXxL5cvbT9fM_B6vtv2oow&usqp=CAU', 'GooGooForGaaGaa'),
      ('Great User Research Tutorial', 'With Qualitative User Research', 'https://www.youtube.com/watch?v=bAARmsv1tms', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2DYI0z1p-L5REOZx2Asp1Gv298TapfHvqQ&usqp=CAU', 'RandyMarsh'),
      ('Creating Wireframes', 'How To Create Your First Wireframe (A UX Tutorial)', 'https://youtu.be/qpH7-KFWZRI?si=B-2M-vnvqJHNQGNL', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkB1rertiIxa9kkL80ioF17L5xAO9lWRTng&usqp=CAU', 'Jimbo'),
      ('More On Wireframes', 'How To Make An Effective Customer Journey Map In 1 Hour (FREE Templates)', 'https://youtu.be/68ZXwI5L4kY?si=PlWEXIaGdOBKeZXs', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MKC18oS9oWX56Vw5rl9e1eWAkRwokQ4QmQ&usqp=CAU', 'Susan')
    `);

    //Seed the users table
    await pool.query(`
      INSERT INTO users (name, email, username, password, imglink)
      VALUES
      ('Olivia Johnson', 'Olivia.123@gmail.com', 'Livi1996', '$2b$10$eSMkuyVtfdWuLTLonkPHIe0YdOK43quCXFce49DMWlz0oyA8fXZEO', 'https://res.cloudinary.com/ddckdaelz/image/upload/v1697441490/Illustration/lost_exbnp0.jpg'),
      ('Martina', 'martina@gmail.com', 'Martina1', '$2b$10$wIdqrcM31m0PC/KIwh1lOeXuxiE/bK1AaSP6.eOtxqsjCdogkpg9O', 'https://cdn.iconscout.com/icon/premium/png-512-thumb/eco-mind-8498349-7013971.png?f=webp&w=256'),
      ('Danny Ryan', 'dannykryan@gmail.com', 'dannykryan', '$2b$10$azMnp/SVmuASWAgKyQMtPuUrFgjLVQ.IRFkaU6/iUF0TgtxR54Ht.', 'https://avatars.githubusercontent.com/u/111202444?v=4')
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
