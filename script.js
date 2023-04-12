const questions = [
    "Nenne einen ungewöhnlichen Gegenstand, den ein Softwareentwickler auf seinem Schreibtisch haben könnte. Von 1 (Leicht ungewöhnlich) bis 10 (Absolut bizarr).",
    "Liste eine kuriose Ausrede auf, die ein Entwickler verwenden könnte, um zu erklären, warum er die Deadline verpasst hat. Von 1 (Klassiker) bis 10 (Extrem einfallsreich).",
    "Nenne ein außergewöhnliches Hobby, das ein Softwareentwickler in seiner Freizeit ausüben könnte. Von 1 (Ein bisschen ungewöhnlich) bis 10 (Völlig unerwartet).",
    "Liste ein ungewöhnliches Getränk auf, das ein Softwareentwickler trinken könnte, um wach und fokussiert zu bleiben. Von 1 (Leicht exzentrisch) bis 10 (Unfassbar skurril).",
    "Nenne eine unerwartete Fähigkeit, die ein Softwareentwickler zusätzlich zu seinen Programmierkenntnissen besitzen könnte. Von 1 (Ein bisschen ungewöhnlich) bis 10 (Völlig unerwartet).",
    "Liste eine unkonventionelle Methode auf, die ein Softwareentwickler anwenden könnte, um Bugs im Code zu finden. Von 1 (Leicht ungewöhnlich) bis 10 (Völlig abgedreht).",
    "Nenne ein fiktives Tier, das ein Softwareentwickler als Haustier halten könnte, um ihn bei der Arbeit zu unterstützen. Von 1 (Etwas ungewöhnlich) bis 10 (Völlig skurril).",
    "Liste eine ungewöhnliche Superkraft auf, die ein Softwareentwickler haben könnte, um seine Arbeit zu erleichtern. Von 1 (Ein bisschen ungewöhnlich) bis 10 (Völlig unerwartet).",
    "Nenne eine skurrile Belohnung, die ein Softwareentwickler erhalten könnte, nachdem er ein wichtiges Projekt erfolgreich abgeschlossen hat. Von 1 (Leicht ungewöhnlich) bis 10 (Absolut bizarr).",
    "Liste zehn kuriose Fehlermeldungen auf, die Entwickler zum Schmunzeln bringen könnten. Von 1 (häufigste Fehlermeldung ever) bis 10 (Skurril ist ein Hilfsausdruck).",
    "Nenne ein ungewöhnliches Objekt, das ein Entwickler als Maus verwenden könnte, wenn die echte Maus verloren geht. Von 1 (Leicht ungewöhnlich) bis 10 (Absolut bizarr).",
    "Liste eine verrückte Methode auf, die ein Entwickler anwenden könnte, um sich während eines langen Meetings wachzuhalten. Von 1 (Ein bisschen ungewöhnlich) bis 10 (Völlig abgedreht).",
    "Nenne eine kuriose Tradition, die ein Softwareentwicklungsteam jedes Mal durchführt, wenn sie ein neues Feature veröffentlichen. Von 1 (Mild skurril) bis 10 (Extrem bizarr).",
    "Liste eine witzige Tradition auf, die ein Softwareentwicklungsteam jedes Mal praktiziert, wenn sie ein Projekt erfolgreich abschließen. Von 1 (Leicht amüsant) bis 10 (Unglaublich schräg).",
    "Nenne eine ungewöhnliche Tradition, die ein Softwareentwicklungsteam jedes Mal durchführt, wenn ein neues Teammitglied an Bord kommt. Von 1 (Etwas ungewöhnlich) bis 10 (Absolut verrückt).",
    "Liste eine verrückte Tradition auf, die ein Softwareentwicklungsteam jedes Mal praktiziert, wenn sie eine besonders schwierige Herausforderung meistern. Von 1 (Mild skurril) bis 10 (Extrem bizarr).",
    "Nenne eine humorvolle Tradition, die ein Softwareentwicklungsteam jedes Mal durchführt, wenn sie eine erfolgreiche Präsentation vor Kunden halten. Von 1 (Leicht amüsant) bis 10 (Unglaublich schräg).",
    "Nenne ein ungewöhnliches Haustier, das als Maskottchen für ein Softwareentwicklungsteam dienen könnte. Von 1 (Etwas seltsam) bis 10 (Absolut bizarr).",
    "Liste eine verrückte Tradition auf, die ein Softwareentwicklungsteam jedes Mal durchführt, wenn sie erfolgreich einen Bug beheben. Von 1 (Mild skurril) bis 10 (Extrem bizarr).",
    "Nenne ein fiktives Softwareprodukt, das ausschließlich von außerirdischen Entwicklern entwickelt wurde. Von 1 (Leicht abgedreht) bis 10 (Außerirdisch absurd).",
    "Liste eine unerwartete Zutat auf, die in einem von Programmierern bevorzugten Snack enthalten sein könnte. Von 1 (Kulinarisch gewagt) bis 10 (Ein Gaumengraus).",
    "Nenne eine skurrile Disziplin bei den Olympischen Spielen der Softwareentwicklung. Von 1 (Etwas ungewöhnlich) bis 10 (Absolut verrückt).",
    "Liste eine unwahrscheinliche Kombination aus zwei Programmiersprachen auf, die zusammen eine neue Sprache bilden würden. Von 1 (Etwas schräg) bis 10 (Völlig irrwitzig).",
    "Nenne eine unkonventionelle Art von Transportmittel, das ein Softwareentwickler verwenden könnte, um zur Arbeit zu kommen. Von 1 (Leicht exzentrisch) bis 10 (Völlig durchgeknallt).",
    "Liste eine bizarre Anforderung auf, die in einem hypothetischen Stellenangebot für Softwareentwickler stehen könnte. Von 1 (Etwas unorthodox) bis 10 (Kopfschütteln garantiert).",
    "Nenne eine skurrile Ablenkung, die ein Softwareentwickler in seinem Arbeitsbereich haben könnte, um den Stress abzubauen. Von 1 (Etwas ungewöhnlich) bis 10 (Gibt's das wirklich?).",
    "Liste eine ungewöhnliche Inspirationsquelle auf, die ein Softwareentwickler nutzen könnte, um kreative Lösungen für komplexe Probleme zu finden. Von 1 (Leicht abgedreht) bis 10 (Absolut unerwartet).",
    "Nenne einen ungewöhnlichen Ort, an dem Team Smart Connect ein Teammeeting abhalten könnte. Von 1 (Ein wenig unkonventionell) bis 10 (Verrückteste Idee aller Zeiten).",
    "Liste einen lustigen Spitznamen für einen Mitarbeiter von Team Smart Connect auf. Von 1 (Leicht amüsant) bis 10 (Lachanfall garantiert).",
    "Nenne eine überraschende Aktivität, die Team Smart Connect als Teambuilding-Maßnahme durchführen könnte. Von 1 (Interessant) bis 10 (Das ist wirklich außergewöhnlich!).",
    "Liste eine unerwartete Programmiersprache auf, die Team Smart Connect für ein zukünftiges Projekt verwenden könnte. Von 1 (Nicht ganz mainstream) bis 10 (Wo haben sie das denn ausgegraben?).",
    "Nenne eine skurrile oder unerwartete Methode, die Team Smart Connect verwendet, um Deadlines einzuhalten. Von 1 (Etwas unorthodox) bis 10 (Deadlines sind kein Thema mehr).",
    "Liste einen humorvollen Titel für eine Team Smart Connect-Biografie auf. Von 1 (Mild witzig) bis 10 (Bestseller-Potenzial).",
    "Nenne ein ungewöhnliches Belohnungssystem, das Team Smart Connect für seine Mitarbeiter einführen könnte. Von 1 (Kreativ) bis 10 (Motivation auf Hochtouren).",
    "Liste einen unkonventionellen Weg auf, wie Team Smart Connect mit schwierigen Kunden umgeht. Von 1 (Etwas gewagt) bis 10 (Revolutionär).",
    "Nenne ein fiktives Gadget, das Team Smart Connect entwickeln könnte, um die Produktivität zu steigern. Von 1 (Nützlich) bis 10 (Das würde die Arbeitswelt verändern!).",
    "Liste ein unerwartetes Hobby auf, das jeder bei Team Smart Connect gemeinsam ausüben könnte. Von 1 (Außergewöhnlich) bis 10 (Das hätten wir nicht erwartet!).",
]
const questionElement = document.getElementById("question");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    questionElement.textContent = randomQuestion;
});
