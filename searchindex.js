Search.setIndex({"docnames": ["chapters/event_loop/credits", "chapters/event_loop/intro", "chapters/event_loop/producer_consumer", "chapters/event_loop/simple_scheduler", "chapters/event_loop/threading", "chapters/intro"], "filenames": ["chapters/event_loop/credits.md", "chapters/event_loop/intro.md", "chapters/event_loop/producer_consumer.ipynb", "chapters/event_loop/simple_scheduler.ipynb", "chapters/event_loop/threading.ipynb", "chapters/intro.md"], "titles": ["<span class=\"section-number\">1.4. </span>Credits", "<span class=\"section-number\">1. </span>Event loop", "<span class=\"section-number\">1.3. </span>Producer consumer problem", "<span class=\"section-number\">1.2. </span>A simple scheduler", "<span class=\"section-number\">1.1. </span>Running in parallel", "From scratch"], "terms": {"thi": [0, 1, 2, 3, 4, 5], "text": 0, "rendit": 0, "david": 0, "beazlei": 0, "s": [0, 2, 3, 4, 5], "absolut": 0, "amaz": 0, "talk": 0, "titl": 0, "write": [0, 1, 4, 5], "your": 0, "own": [0, 1], "async": [0, 1, 2], "With": 0, "some": [0, 2, 3], "extra": 0, "explan": 0, "place": [0, 3], "where": [0, 3], "i": [0, 2, 3, 5], "felt": 0, "could": [0, 2], "add": [0, 2, 3], "more": [0, 2, 3], "clariti": 0, "video": 0, "ha": [0, 3, 4], "been": 0, "inspir": 0, "start": [0, 2, 3, 4, 5], "project": 0, "pleas": [0, 2], "check": [0, 2, 3], "out": [0, 2, 5], "hi": 0, "cours": 0, "content": [0, 4], "he": 0, "great": 0, "teacher": 0, "an": [0, 1, 2, 3, 4], "If": [1, 2, 3, 4], "you": [1, 2, 3, 4, 5], "have": [1, 2, 3, 4, 5], "ever": 1, "us": [1, 2, 3, 4], "someth": [1, 2, 3, 4], "along": 1, "line": 1, "await": 1, "futur": 1, "promis": 1, "fundament": [1, 5], "idea": [1, 5], "concurr": [1, 2, 3], "It": [1, 2, 3], "how": [1, 2, 3], "we": [1, 2, 3, 4, 5], "get": [1, 2], "co": [1, 4], "oper": 1, "adventur": 1, "our": 1, "from": [1, 2, 3], "scratch": 1, "understand": [1, 5], "realli": [1, 3], "work": [1, 2, 3, 4], "underneath": 1, "The": [1, 2], "chapter": [1, 2, 5], "assum": [1, 2], "late": 1, "beginn": 1, "intermedi": 1, "profici": 1, "python": [1, 2, 3, 5], "As": 2, "state": [2, 3], "last": 2, "who": 2, "event": [2, 3, 5], "ani": [2, 3], "arbitrari": [2, 3], "time": [2, 4], "And": [2, 3, 4], "wait": [2, 3, 4], "listen": [2, 3], "On": 2, "receiv": 2, "act": 2, "let": [2, 3, 4], "implement": [2, 3, 5], "thread": [2, 3, 4], "like": 2, "befor": 2, "import": [2, 3, 4], "queue": [2, 3], "def": [2, 3, 4], "q": 2, "count": [2, 3, 4], "n": [2, 3, 4], "rang": 2, "print": [2, 3, 4], "put": 2, "sleep": [2, 3, 4], "1": [2, 3, 4], "done": 2, "none": 2, "while": [2, 3, 4], "true": [2, 3], "item": [2, 3], "break": [2, 3], "ad": 2, "pictur": 2, "everi": [2, 3, 5], "second": [2, 4], "keep": [2, 3], "loop": [2, 3, 5], "all": [2, 3, 4, 5], "whenev": 2, "see": [2, 3], "ll": [2, 3, 4, 5], "announc": 2, "its": [2, 3], "final": [2, 3], "kick": [2, 3], "off": [2, 3, 4, 5], "two": [2, 3, 4], "them": [2, 3, 4], "both": [2, 3], "target": [2, 4], "arg": [2, 4], "10": 2, "0": [2, 3, 4], "plan": 2, "now": [2, 3, 4], "challeng": 2, "run": [2, 3], "instead": [2, 3], "parallel": 2, "cannot": 2, "exist": 2, "setup": [2, 3, 4], "sinc": 2, "default": 2, "doe": 2, "commun": 2, "wai": [2, 3, 4], "schedul": 2, "need": [2, 3], "custom": 2, "reimport": 2, "old": 2, "had": 2, "previou": 2, "think": [2, 3], "about": [2, 3], "asyncqueu": 2, "heapq": [2, 3], "collect": [2, 3], "dequ": [2, 3], "class": [2, 3], "__init__": [2, 3], "self": [2, 3], "readi": [2, 3], "prioriti": 2, "sequenc": 2, "call_soon": [2, 3], "func": [2, 3], "append": [2, 3], "call_lat": [2, 3], "delai": [2, 3], "deadlin": [2, 3], "heappush": [2, 3], "run_count": 2, "_": [2, 3], "heappop": [2, 3], "delta": [2, 3], "question": [2, 3], "block": [2, 3], "f": 2, "popleft": [2, 3], "wil": 2, "still": [2, 3], "pretti": [2, 5], "much": 2, "same": [2, 3], "exampl": 2, "simpl": [2, 4, 5], "normal": 2, "tricki": 2, "part": 2, "function": [2, 3, 4, 5], "trigger": 2, "constantli": 2, "mock": 2, "return": 2, "becaus": 2, "someon": 2, "call": [2, 3, 4], "continu": 2, "somehow": 2, "signal": 2, "why": [2, 3, 4], "callback": 2, "can": [2, 3, 4, 5], "pass": 2, "when": 2, "ar": [2, 3, 4], "nope": 2, "even": [2, 4], "other": [2, 3, 4], "orchestr": [2, 3], "should": 2, "so": [2, 3, 4], "would": 2, "solv": [2, 3, 4], "minut": 2, "pai": 2, "close": 2, "attent": 2, "what": [2, 4, 5], "anoth": [2, 3], "each": [2, 4], "element": 2, "reason": 2, "here": [2, 3, 5], "getter": 2, "later": 2, "els": 2, "lambda": [2, 3], "observ": [2, 3], "carefulli": 2, "happen": [2, 4], "thei": [2, 4], "come": [2, 3], "back": 2, "queu": [2, 3], "neat": 2, "trick": 2, "also": [2, 3, 4], "bad": 2, "actual": 2, "detail": [2, 5], "might": 2, "clear": 2, "For": 2, "maintain": [2, 3], "counter": [2, 3, 4], "current": 2, "which": [2, 3, 4], "mean": 2, "closur": [2, 3], "again": [2, 3, 4], "rule": 2, "sai": 2, "emit": 2, "complet": 2, "_run": [2, 3], "found": 2, "move": 2, "_consum": 2, "async_queu": 2, "3": [2, 3, 4], "2": [2, 3, 4], "4": [2, 3, 4], "slightli": 2, "mind": 2, "bend": 2, "recap": 2, "exactli": 2, "carri": 2, "forward": [2, 3], "At": [2, 4], "point": 2, "execut": [2, 3, 4], "one": [2, 3, 4, 5], "empti": 2, "noth": [2, 3], "do": [2, 3, 4, 5], "next": [2, 3], "fn": [2, 3, 4], "In": [2, 3, 4], "earlier": 2, "goe": 2, "look": [2, 3], "nice": 2, "flip": 2, "first": [2, 3], "paus": 2, "hairi": 2, "pars": 2, "code": 2, "becom": 2, "nightmar": 2, "construct": [2, 3], "provid": 2, "box": [2, 3], "clean": 2, "up": [2, 3, 4], "bit": 2, "yield": 2, "until": 2, "familiar": 2, "read": 2, "jump": 2, "just": [3, 4], "anyth": 3, "cpu": [3, 4], "idl": [3, 4], "spin": [3, 4], "know": 3, "ye": 3, "But": [3, 4], "take": 3, "around": 3, "interleav": 3, "request": 3, "fix": 3, "word": [3, 4], "essenti": 3, "list": 3, "nativ": 3, "build": [3, 5], "swap": 3, "countdown": [3, 4], "countup": [3, 4], "down": [3, 4], "straight": 3, "after": 3, "ask": 3, "interest": 3, "number": 3, "itself": 3, "variabl": 3, "stop": [3, 4], "argument": 3, "till": 3, "far": 3, "One": [3, 4], "inner": 3, "var": 3, "zero": 3, "int": 3, "piec": 3, "togeth": 3, "5": [3, 4], "awesom": [3, 4], "expect": [3, 4], "dure": 3, "That": 3, "accept": 3, "chang": 3, "new": 3, "Not": 3, "free": 3, "pull": 3, "creat": 3, "hold": 3, "asleep": 3, "sort": 3, "alwai": 3, "make": [3, 5], "sure": 3, "don": 3, "t": [3, 5], "insert": 3, "There": [3, 4], "veri": 3, "small": 3, "edg": 3, "case": 3, "tie": 3, "breaker": 3, "seq": 3, "go": [3, 5], "well": 3, "ve": 3, "differ": [3, 4], "rate": 3, "classic": 3, "problem": [3, 5], "visit": 3, "pick": 3, "produc": 3, "consum": 3, "deal": 3, "random": 3, "per": 3, "desir": 3, "respond": [3, 4], "Is": 3, "result": 3, "sequenti": 4, "stuff": 4, "truli": 4, "independ": 4, "load": 4, "real": 4, "hardwar": 4, "level": 4, "probabl": 4, "8": 4, "worker": 4, "These": 4, "languag": 4, "os": 4, "lot": 4, "order": 4, "hundr": 4, "core": 4, "verifi": 4, "25": 4, "tradit": 4, "ordin": 4, "between": 4, "right": 4, "server": 4, "mostli": 4, "term": 4, "input": 4, "output": 4, "mayb": 4, "api": 4, "file": 4, "show": 4, "etc": 4, "sit": 4, "preciou": 4, "resourc": 4, "rememb": 4, "richard": 5, "feynman": 5, "book": 5, "deep": 5, "dive": 5, "specif": 5, "topic": 5, "comput": 5, "scienc": 5, "tri": 5, "through": 5, "journei": 5, "find": 5, "behind": 5, "runnabl": 5, "notebook": 5, "end": 5, "set": 5, "ambiti": 5, "checklist": 5, "intend": 5, "progress": 5, "hash": 5, "encod": 5, "asymmetr": 5, "encrypt": 5, "dn": 5}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"credit": 0, "event": 1, "loop": 1, "produc": 2, "consum": 2, "problem": [2, 4], "A": 3, "simpl": 3, "schedul": 3, "dissect": 3, "what": 3, "time": 3, "sequenc": 3, "run": 4, "parallel": 4, "The": 4, "when": 4, "your": 4, "program": 4, "io": 4, "bound": 4, "from": 5, "scratch": 5}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})