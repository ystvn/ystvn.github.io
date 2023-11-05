const acts23741 = document.getElementById('acts23741');
const acts8913 = document.getElementById('acts8913');
const acts82639 = document.getElementById('acts82639');
const acts104448 = document.getElementById('acts104448');
const acts163034 = document.getElementById('acts163034');

const hebrews101922 = document.getElementById('hebrews101922');

const ephesians2410 = document.getElementById('ephesians2410');

const peter31822 = document.getElementById('peter31822');

const matthew281820 = document.getElementById('matthew281820');
const matthew31317 = document.getElementById('matthew31317');

const romans626 = document.getElementById('romans626');

const galatians32329 = document.getElementById('galatians32329');

const colossians21113 = document.getElementById('colossians21113');

const lesson = document.getElementById("lesson");

const dropdown = document.querySelectorAll('.dropdown-item');
const verse = document.getElementById('verse');
const footnotes = document.getElementById('context');
const lessonPlan = document.getElementById('lesson-text');

// Acts 8:9-13
acts8913.addEventListener('click', () => {
    verse.innerHTML = "9 Now for some time a man named Simon had practiced sorcery in the city and amazed all the people of " +
        "Samaria. He boasted " +
        "that he was someone great, <br><br>" +
        "10 and all the people, both high and low, gave him their attention " +
        "and exclaimed, “This man " +
        "is rightly called the Great Power of God.” <br><br>" +
        "11 They followed him because he had amazed them for a " +
        "long time with his " +
        "sorcery. <br><br>" +
        "12 But when they believed Philip as he proclaimed the good news of the kingdom of God " +
        "and the name of Jesus " +
        "Christ, they were baptized, both men and women. <br><br>" +
        "13 Simon himself believed and was baptized. " +
        "he followed Philip " +
        "everywhere, astonished by the great signs and miracles he saw.";

    footnotes.innerHTML = ''

    removeActive();
    acts8913.classList.add('active');
})

// Acts 2:37-41
acts23741.addEventListener('click', () => {
    verse.innerHTML = "37 When the people heard this, they were cut to the heart and said to Peter and the other apostles, “Brothers, what shall we do?”<br><br>" +
        "38 Peter replied, “Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.<br><br>" +
        "39 The promise is for you and your children and for all who are far off—for all whom the Lord our God will call.<br><br>" +
        "40 With many other words he warned them; and he pleaded with them, “Save yourselves from this corrupt generation.”<br><br>" +
        "41 Those who accepted his message were baptized, and about three thousand were added to their number that day.";

    footnotes.innerHTML = ''

    removeActive();
    acts23741.classList.add('active');
})

// Acts 8:26-39
acts82639.addEventListener('click', () => {
    verse.innerHTML = "26 Now an angel of the Lord said to Philip, 'Go south to the road—the desert road—that goes down from Jerusalem to Gaza.'<br><br>" +
        "27 So he started out, and on his way he met an Ethiopian[a] eunuch, an important official in charge of all the treasury of the Kandake (which means 'queen of the Ethiopians'). This man had gone to Jerusalem to worship.<br><br>" +
        "28 and on his way home was sitting in his chariot reading the Book of Isaiah the prophet.<br><br>" +
        "29 The Spirit told Philip, 'Go to that chariot and stay near it.'<br><br>" +
        "30 Then Philip ran up to the chariot and heard the man reading Isaiah the prophet. 'Do you understand what you are reading?' Philip asked.<br><br>" +
        "31 'How can I,' he said, 'unless someone explains it to me?' So he invited Philip to come up and sit with him.<br><br>" +
        "32 This is the passage of Scripture the eunuch was reading: " +
        "'He was led like a sheep to the slaughter, and as a lamb before its shearer is silent, so he did not open his mouth.<br> <br>" +
        "33 In his humiliation he was deprived of justice. Who can speak of his descendants? For his life was taken from the earth.'[b]<br> <br>" +
        "34 The eunuch asked Philip, 'Tell me, please, who is the prophet talking about, himself or someone else?'<br><br> " +
        "35 Then Philip began with that very passage of Scripture and told him the good news about Jesus.<br><br> " +
        "36 As they traveled along the road, they came to some water and the eunuch said, 'Look, here is water. What can stand in the way of my being baptized?'<br><br> " +
        "37 Philip said, 'If you believe with all your heart, you may.' The eunuch answered, 'I believe that Jesus Christ is the Son of God.' <br><br>" +
        "38 And he gave orders to stop the chariot. Then both Philip and the eunuch went down into the water and Philip baptized him. <br><br>" +
        "39 When they came up out of the water, the Spirit of the Lord suddenly took Philip away, and the eunuch did not see him again, but went on his way rejoicing.<br><br>";

    footnotes.innerHTML = '<li class="footnotes" > <b>Acts 8:27 </b>That is, from the southern Nile region</li >' +
        '<li class="footnotes"><b>Acts 8:33</b> Isaiah 53:7,8 (see Septuagint)</li>'

    removeActive();
    acts82639.classList.add('active');
})

// Acts 10:44-48
acts104448.addEventListener('click', () => {
    verse.innerHTML = "44 While Peter was still speaking these words, the Holy Spirit came on all who heard the message.<br><br>" +
        "45 The circumcised believers who had come with Peter were astonished that the gift of the Holy Spirit had been poured out even on Gentiles.<br><br>" +
        "46 For they heard them speaking in tongues[a] and praising God. Then Peter said,<br><br>" +
        "47 'Surely no one can stand in the way of their being baptized with water. They have received the Holy Spirit just as we have.'<br><br>" +
        "48 So he ordered that they be baptized in the name of Jesus Christ. Then they asked Peter to stay with them for a few days.";

    footnotes.innerHTML = '<li class="footnotes" > <b>Acts 10:46 </b>Or other languages</li >'

    removeActive();
    acts104448.classList.add('active');
})

// Acts 16:30-34
acts163034.addEventListener('click', () => {
    verse.innerHTML = "30 He then brought them out and asked, 'Sirs, what must I do to be saved?'<br><br>" +
        "31 They replied, 'Believe in the Lord Jesus, and you will be saved—you and your household.'<br><br>" +
        "32 Then they spoke the word of the Lord to him and to all the others in his house.<br><br>" +
        "33 At that hour of the night the jailer took them and washed their wounds; then immediately he and all his household were baptized.<br><br>" +
        "34 The jailer brought them into his house and set a meal before them; he was filled with joy because he had come to believe in God—he and his whole household.";

    footnotes.innerHTML = ''


    removeActive();
    acts163034.classList.add('active');
})



// Hebrews 10:19-22
hebrews101922.addEventListener('click', () => {
    verse.innerHTML = "19 Therefore, brothers and sisters, since we have confidence to enter the Most Holy Place by the blood of Jesus, <br><br>" +
        "20 by a new and living way opened for us through the curtain, that is, his body, <br><br>" +
        "21 and since we have a great priest over the house of God, <br><br>" +
        "22 let us draw near to God with a sincere heart and with the full assurance that faith brings, having our hearts sprinkled to cleanse us from a guilty conscience and having our bodies washed with pure water.";
    footnotes.innerHTML = ''

    removeActive();
    hebrews101922.classList.add('active');
})




// Ephesians 2:4-10
ephesians2410.addEventListener('click', () => {
    verse.innerHTML = "4 But because of his great love for us, God, who is rich in mercy,<br><br>" +
        "5 made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved.<br><br>" +
        "6 And God raised us up with Christ and seated us with him in the heavenly realms in Christ Jesus,<br><br>" +
        "7 in order that in the coming ages he might show the incomparable riches of his grace, expressed in his kindness to us in Christ Jesus.<br><br>" +
        "8 For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—<br><br>" +
        "9 not by works, so that no one can boast.<br><br>" +
        "10 For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.";

    footnotes.innerHTML = ''


    removeActive();
    ephesians2410.classList.add('active');
})


// 1 Peter 3:18-22
peter31822.addEventListener('click', () => {
    verse.innerHTML = `18 For Christ also suffered once for sins, the righteous for the unrighteous, to bring you to God. He was put to death in the body but made alive in the Spirit. <br><br>` +
        '19 After being made alive,[a] he went and made proclamation to the imprisoned spirits—<br><br>' +
        `20 to those who were disobedient long ago when God waited patiently in the days of Noah while the ark was being built. In it only a few people, eight in all, were saved through water,<br><br>` +
        `21 and this water symbolizes baptism that now saves you also — not the removal of dirt from the body but the pledge of a clear conscience toward God.[b] It saves you by the resurrection of Jesus Christ,<br><br>` +
        `22 who has gone into heaven and is at God’s right hand—with angels, authorities and powers in submission to him.`;

    footnotes.innerHTML = '<li class="footnotes" > <b>1 Peter 3:19 </b>Or but made alive in the spirit, 19 in which also</li >' +
        '<li class="footnotes"><b>1 Peter 3:21</b> Or but an appeal to God for a clear conscience</li>'

    removeActive();
    peter31822.classList.add('active');
})


// Matthew 28:18-20
matthew281820.addEventListener('click', () => {
    verse.innerHTML = "18 Then Jesus came to them and said, 'All authority in heaven and on earth has been given to me. <br><br>" +
        "19 Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, <br><br>" +
        "20 and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.'";
    footnotes.innerHTML = ''

    removeActive();
    matthew281820.classList.add('active');
})

// Matthew 3:13-17
matthew31317.addEventListener('click', () => {
    verse.innerHTML = "13 Then Jesus came from Galilee to the Jordan to be baptized by John. <br><br>" +
        "14 But John tried to deter him, saying, 'I need to be baptized by you, and do you come to me?'<br><br> " +
        "15 Jesus replied, 'Let it be so now; it is proper for us to do this to fulfill all righteousness.' Then John consented. <br><br>" +
        "16 As soon as Jesus was baptized, he went up out of the water. At that moment heaven was opened, and he saw the Spirit of God descending like a dove and alighting on him. <br><br>" +
        "17 And a voice from heaven said, 'This is my Son, whom I love; with him I am well pleased.'";
    footnotes.innerHTML = ''

    removeActive();
    matthew31317.classList.add('active');
})

// Romans 6:2-6
romans626.addEventListener('click', () => {
    verse.innerHTML = "2 By no means! We are those who have died to sin; how can we live in it any longer?<br><br>" +
        "3 Or don’t you know that all of us who were baptized into Christ Jesus were baptized into his death?<br><br>" +
        "4 We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.<br><br>" +
        "5 For if we have been united with him in a death like his, we will certainly also be united with him in a resurrection like his.<br><br>" +
        "6 For we know that our old self was crucified with him so that the body ruled by sin might be done away with,[a] that we should no longer be slaves to sin—<br><br> " +
        "7 because anyone who has died has been set free from sin.";

    footnotes.innerHTML = '<li class="footnotes" > <b>Romans 6:6 </b>Or be rendered powerless</li >'


    removeActive();
    romans626.classList.add('active');
})

// Galatians 3:23-29
galatians32329.addEventListener('click', () => {
    verse.innerHTML = "23 Before the coming of this faith,[a] we were held in custody under the law, locked up until the faith that was to come would be revealed.<br><br> " +
        "24 So the law was our guardian until Christ came that we might be justified by faith.<br><br> " +
        "25 Now that this faith has come, we are no longer under a guardian. <br><br>" +
        "26 So in Christ Jesus you are all children of God through faith, <br><br>" +
        "27 for all of you who were baptized into Christ have clothed yourselves with Christ.<br><br> " +
        "28 There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus. <br><br>" +
        "29 If you belong to Christ, then you are Abraham’s seed, and heirs according to the promise.";

    footnotes.innerHTML = '<li class="footnotes" > <b>Galatians 3:23 </b>Or through the faithfulness of Jesus … 23 Before faith came</li >'


    removeActive();
    galatians32329.classList.add('active');
})

// Colossians 3:23-29
colossians21113.addEventListener('click', () => {
    verse.innerHTML = "11 In him you were also circumcised with a circumcision not performed by human hands.Your whole self ruled by the flesh[b] was put off when you were circumcised by[c] Christ, <br><br> " +
        "12 having been buried with him in baptism, in which you were also raised with him through your faith in the working of God, who raised him from the dead. <br><br>" +
        "13 When you were dead in your sins and in the uncircumcision of your flesh, God made you[d] alive with Christ. He forgave us all our sins,"
    footnotes.innerHTML = ''

    removeActive();
    colossians21113.classList.add('active');
})

lesson.addEventListener('click', () => {

    footnotes.innerHTML = ''

    removeActiveLesson();
    lesson.classList.add('active');
})


function removeActive() {
    lessonPlan.style.display = 'none';
    verse.style.display = 'block';
    lesson.classList.remove('active');
    dropdown.forEach(link => {
        link.classList.remove('active');
    });
}

function removeActiveLesson() {
    lessonPlan.style.display = 'block';
    verse.style.display = 'none';
    dropdown.forEach(link => {
        link.classList.remove('active');
    });
}